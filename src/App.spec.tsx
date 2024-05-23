import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider, useQuery } from '@apollo/client';

import App from './App';
import client from './apolloClient';
import { mockPostsData } from './mocks/posts';
import { GET_POST } from './graphql/GET_POST';

jest.mock('@apollo/client', () => {
    const actualApollo = jest.requireActual('@apollo/client');
    return {
        ...actualApollo,
        ApolloProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
        useQuery: jest.fn(),
        createHttpLink: jest.fn().mockReturnValue({}),
        InMemoryCache: jest.fn().mockImplementation(() => ({})),
    };
});

jest.mock('@apollo/client/link/context', () => ({
    setContext: jest.fn().mockReturnValue({
        concat: jest.fn(),
    }),
}));

(useQuery as jest.Mock).mockImplementation((query, options) => {
    if (query === GET_POST && options.variables.id === '1') {
        return {
            loading: false,
            error: null,
            data: mockPostsData,
        };
    }
    return {
        loading: true,
        error: null,
        data: null,
    };
});

const renderApp = (initialRoute = '/') => {
    window.history.pushState({}, 'Test page', initialRoute);
    return render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
};

describe('App', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('renders the header', () => {
        renderApp();
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('navigates to the login page when not authenticated', () => {
        renderApp('/login');
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });

    it('redirects to home if authenticated and on login page', () => {
        localStorage.setItem('token', 'fake-token');
        renderApp('/login');
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('renders the home page when authenticated', () => {
        localStorage.setItem('token', 'fake-token');
        renderApp('/');
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
});
