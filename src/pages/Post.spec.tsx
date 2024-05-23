import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { GET_POST } from '../graphql/GET_POST';
import Post from './Post';
import { mockSinglePost } from '../mocks/posts';

const mocks = [
    {
        request: {
            query: GET_POST,
            variables: {
                id: '1',
            },
        },
        result: {
            data: mockSinglePost,
        },
    },
];

describe('Post Component', () => {
    it('renders loading state initially', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter initialEntries={['/posts/1']}>
                    <Routes>
                        <Route path="/posts/:id" element={<Post />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders post data', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter initialEntries={['/posts/1']}>
                    <Routes>
                        <Route path="/posts/:id" element={<Post />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        expect(await screen.findByText('Mock Post Title')).toBeInTheDocument();
        expect(await screen.findByText('Mock post description')).toBeInTheDocument();
        expect(await screen.findByText('title:')).toBeInTheDocument();
        expect(await screen.findByText('Mock Title Content')).toBeInTheDocument();
        expect(await screen.findByText('content:')).toBeInTheDocument();
        expect(await screen.findByText('Mock Content')).toBeInTheDocument();
        expect(await screen.findByText('By: Mock User')).toBeInTheDocument();
        expect(await screen.findByText('Created at: 2024-02-08T20:42:54.387Z')).toBeInTheDocument();
    });

    it('renders error state', async () => {
        const errorMocks = [
            {
                request: {
                    query: GET_POST,
                    variables: {
                        id: '1',
                    },
                },
                error: new Error('An error occurred'),
            },
        ];

        render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <MemoryRouter initialEntries={['/posts/1']}>
                    <Routes>
                        <Route path="/posts/:id" element={<Post />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        expect(await screen.findByText('Error: An error occurred')).toBeInTheDocument();
    });
});
