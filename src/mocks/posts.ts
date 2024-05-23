export const mockPostsData = {
    posts: {
        totalCount: 6,
        pageInfo: {
            endCursor: 'end-cursor-mock',
            hasNextPage: true,
        },
        nodes: [
            {
                id: '1',
                title: 'Post 1',
                description: 'Description 1',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 5,
                thumbnail: { url: 'https://placeholder.url/1' },
                owner: {
                    member: {
                        name: 'User 1',
                        profilePicture: { url: 'https://via.placeholder.url/1' }
                    }
                },
            },
            {
                id: '2',
                title: 'Post 2',
                description: 'Description 2',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 3,
                thumbnail: { url: 'https://placeholder.url/2' },
                owner: {
                    member: {
                        name: 'User 2',
                        profilePicture: { url: 'https://via.placeholder.url/2' }
                    }
                },
            },
            {
                id: '3',
                title: 'Post 3',
                description: 'Description 3',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 3,
                thumbnail: { url: 'https://placeholder.url/3' },
                owner: {
                    member: {
                        name: 'User 3',
                        profilePicture: { url: 'https://via.placeholder.url/3' }
                    }
                },
            },
        ],
    },
};

export const mockMorePostsData = {
    posts: {
        totalCount: 6,
        pageInfo: {
            endCursor: 'new-end-cursor-mock',
            hasNextPage: false,
        },
        nodes: [
            {
                id: '4',
                title: 'Post 4',
                description: 'Description 4',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 4,
                thumbnail: { url: 'https://placeholder.url/4' },
                owner: {
                    member: {
                        name: 'User 4',
                        profilePicture: { url: 'https://via.placeholder.url/4' }
                    }
                },
            },
            {
                id: '5',
                title: 'Post 5',
                description: 'Description 5',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 6,
                thumbnail: { url: 'https://placeholder.url/5' },
                owner: {
                    member: {
                        name: 'User 5',
                        profilePicture: { url: 'https://via.placeholder.url/5' }
                    }
                },
            },
            {
                id: '6',
                title: 'Post 6',
                description: 'Description 6',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 2,
                thumbnail: { url: 'https://placeholder.url/6' },
                owner: {
                    member: {
                        name: 'User 6',
                        profilePicture: { url: 'https://via.placeholder.url/6' }
                    }
                },
            },
        ],
    },
};

export const mockSinglePost = {
    post: {
        id: '1',
        title: 'Mock Post Title',
        description: 'Mock post description',
        createdAt: '2024-02-08T20:42:54.387Z',
        thumbnail: { url: 'https://placeholder.url/1' },
        fields: [
            { key: 'title', value: '<p>Mock Title Content</p>' },
            { key: 'content', value: '<p>Mock Content</p>' },
        ],
        owner: {
            member: {
                name: 'Mock User',
                profilePicture: { url: 'https://via.placeholder.url/1' }
            },
        },
    },
};
