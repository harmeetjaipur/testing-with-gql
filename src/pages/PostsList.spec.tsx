import { render, screen, fireEvent, } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, } from 'react-router-dom';
import PostList from './PostsList';
import { GET_POSTS } from '../graphql/GET_POSTS';
import { mockMorePostsData, mockPostsData } from '../mocks/posts';

const mocks = [
    {
        request: {
            query: GET_POSTS,
            variables: {
                limit: 3,
                spaceIds: ['jQ6U37yiM2JP'],
                postTypeIds: ['W99dsSCEVggYqIV'],
                orderByString: 'reactionsCount',
                reverse: true,
                filterBy: [
                    {
                        keyString: 'fields.status',
                        operator: 'nin',
                        value: '["clDbTfjFXRZfGrBBCWOJ3","nBOSIoGagWRh7dBY4wgEL"]',
                    },
                ],
            },
        },
        result: {
            data: mockPostsData,
        },
    },
    {
        request: {
            query: GET_POSTS,
            variables: {
                after: 'end-cursor-mock',
                limit: 3,
                spaceIds: ['jQ6U37yiM2JP'],
                postTypeIds: ['W99dsSCEVggYqIV'],
                orderByString: 'reactionsCount',
                reverse: true,
                filterBy: [
                    {
                        keyString: 'fields.status',
                        operator: 'nin',
                        value: '["clDbTfjFXRZfGrBBCWOJ3","nBOSIoGagWRh7dBY4wgEL"]',
                    },
                ],
            },
        },
        result: {
            data: mockMorePostsData,
        },
    },
];

describe('PostList', () => {
    it('renders without crashing and displays posts', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter>
                    <PostList />
                </MemoryRouter>
            </MockedProvider>
        );

        expect(await screen.findByText('Post 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('By: User 1')).toBeInTheDocument();
        expect(screen.getByText('Post 2')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
        expect(screen.getByText('By: User 2')).toBeInTheDocument();
    });

    it('increments likes when like button is clicked', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter>
                    <PostList />
                </MemoryRouter>
            </MockedProvider>
        );

        const likeButtons = await screen.findAllByTestId('thumbs-up');
        expect(likeButtons).toHaveLength(3);

        fireEvent.click(likeButtons[0]);

        expect(screen.getByTestId("likes-Post 3").textContent).toBe('3');
    });

});
