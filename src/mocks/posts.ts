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
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/1',
                    urls: {
                        full: 'https://placeholder.url/1/full',
                        large: 'https://placeholder.url/1/large',
                        medium: 'https://placeholder.url/1/medium',
                        small: 'https://placeholder.url/1/small',
                        thumb: 'https://placeholder.url/1/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 1',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/1',
                            urls: {
                                full: 'https://via.placeholder.url/1/full',
                                large: 'https://via.placeholder.url/1/large',
                                medium: 'https://via.placeholder.url/1/medium',
                                small: 'https://via.placeholder.url/1/small',
                                thumb: 'https://via.placeholder.url/1/thumb'
                            }
                        }
                    }
                },
                slug: 'post-1',
                reactionsCount: 10,
                hasMoreContent: false,
                shortContent: 'Short content for Post 1',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user1',
                createdById: 'user1',
                status: 'published',
                repliesCount: 2,
                totalRepliesCount: 4,
                textContent: 'Full content for Post 1',
                relativeUrl: '/posts/1',
                url: 'https://placeholder.url/posts/1',
            },
            {
                id: '2',
                title: 'Post 2',
                description: 'Description 2',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 3,
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/2',
                    urls: {
                        full: 'https://placeholder.url/2/full',
                        large: 'https://placeholder.url/2/large',
                        medium: 'https://placeholder.url/2/medium',
                        small: 'https://placeholder.url/2/small',
                        thumb: 'https://placeholder.url/2/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 2',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/2',
                            urls: {
                                full: 'https://via.placeholder.url/2/full',
                                large: 'https://via.placeholder.url/2/large',
                                medium: 'https://via.placeholder.url/2/medium',
                                small: 'https://via.placeholder.url/2/small',
                                thumb: 'https://via.placeholder.url/2/thumb'
                            }
                        }
                    }
                },
                slug: 'post-2',
                reactionsCount: 5,
                hasMoreContent: false,
                shortContent: 'Short content for Post 2',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user2',
                createdById: 'user2',
                status: 'published',
                repliesCount: 1,
                totalRepliesCount: 2,
                textContent: 'Full content for Post 2',
                relativeUrl: '/posts/2',
                url: 'https://placeholder.url/posts/2',
            },
            {
                id: '3',
                title: 'Post 3',
                description: 'Description 3',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 3,
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/3',
                    urls: {
                        full: 'https://placeholder.url/3/full',
                        large: 'https://placeholder.url/3/large',
                        medium: 'https://placeholder.url/3/medium',
                        small: 'https://placeholder.url/3/small',
                        thumb: 'https://placeholder.url/3/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 3',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/3',
                            urls: {
                                full: 'https://via.placeholder.url/3/full',
                                large: 'https://via.placeholder.url/3/large',
                                medium: 'https://via.placeholder.url/3/medium',
                                small: 'https://via.placeholder.url/3/small',
                                thumb: 'https://via.placeholder.url/3/thumb'
                            }
                        }
                    }
                },
                slug: 'post-3',
                reactionsCount: 8,
                hasMoreContent: false,
                shortContent: 'Short content for Post 3',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user3',
                createdById: 'user3',
                status: 'published',
                repliesCount: 3,
                totalRepliesCount: 6,
                textContent: 'Full content for Post 3',
                relativeUrl: '/posts/3',
                url: 'https://placeholder.url/posts/3',
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
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/4',
                    urls: {
                        full: 'https://placeholder.url/4/full',
                        large: 'https://placeholder.url/4/large',
                        medium: 'https://placeholder.url/4/medium',
                        small: 'https://placeholder.url/4/small',
                        thumb: 'https://placeholder.url/4/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 4',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/4',
                            urls: {
                                full: 'https://via.placeholder.url/4/full',
                                large: 'https://via.placeholder.url/4/large',
                                medium: 'https://via.placeholder.url/4/medium',
                                small: 'https://via.placeholder.url/4/small',
                                thumb: 'https://via.placeholder.url/4/thumb'
                            }
                        }
                    }
                },
                slug: 'post-4',
                reactionsCount: 2,
                hasMoreContent: false,
                shortContent: 'Short content for Post 4',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user4',
                createdById: 'user4',
                status: 'published',
                repliesCount: 0,
                totalRepliesCount: 0,
                textContent: 'Full content for Post 4',
                relativeUrl: '/posts/4',
                url: 'https://placeholder.url/posts/4',
            },
            {
                id: '5',
                title: 'Post 5',
                description: 'Description 5',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 6,
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/5',
                    urls: {
                        full: 'https://placeholder.url/5/full',
                        large: 'https://placeholder.url/5/large',
                        medium: 'https://placeholder.url/5/medium',
                        small: 'https://placeholder.url/5/small',
                        thumb: 'https://placeholder.url/5/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 5',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/5',
                            urls: {
                                full: 'https://via.placeholder.url/5/full',
                                large: 'https://via.placeholder.url/5/large',
                                medium: 'https://via.placeholder.url/5/medium',
                                small: 'https://via.placeholder.url/5/small',
                                thumb: 'https://via.placeholder.url/5/thumb'
                            }
                        }
                    }
                },
                slug: 'post-5',
                reactionsCount: 7,
                hasMoreContent: false,
                shortContent: 'Short content for Post 5',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user5',
                createdById: 'user5',
                status: 'published',
                repliesCount: 1,
                totalRepliesCount: 2,
                textContent: 'Full content for Post 5',
                relativeUrl: '/posts/5',
                url: 'https://placeholder.url/posts/5',
            },
            {
                id: '6',
                title: 'Post 6',
                description: 'Description 6',
                createdAt: '2024-02-08T20:42:54.387Z',
                likes: 2,
                thumbnail: {
                    __typename: 'Image',
                    url: 'https://placeholder.url/6',
                    urls: {
                        full: 'https://placeholder.url/6/full',
                        large: 'https://placeholder.url/6/large',
                        medium: 'https://placeholder.url/6/medium',
                        small: 'https://placeholder.url/6/small',
                        thumb: 'https://placeholder.url/6/thumb'
                    }
                },
                owner: {
                    member: {
                        name: 'User 6',
                        profilePicture: {
                            __typename: 'Image',
                            url: 'https://via.placeholder.url/6',
                            urls: {
                                full: 'https://via.placeholder.url/6/full',
                                large: 'https://via.placeholder.url/6/large',
                                medium: 'https://via.placeholder.url/6/medium',
                                small: 'https://via.placeholder.url/6/small',
                                thumb: 'https://via.placeholder.url/6/thumb'
                            }
                        }
                    }
                },
                slug: 'post-6',
                reactionsCount: 1,
                hasMoreContent: false,
                shortContent: 'Short content for Post 6',
                publishedAt: '2024-02-08T20:42:54.387Z',
                ownerId: 'user6',
                createdById: 'user6',
                status: 'published',
                repliesCount: 0,
                totalRepliesCount: 0,
                textContent: 'Full content for Post 6',
                relativeUrl: '/posts/6',
                url: 'https://placeholder.url/posts/6',
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
        thumbnail: {
            __typename: 'Image',
            url: 'https://placeholder.url/1',
            urls: {
                full: 'https://placeholder.url/1/full',
                large: 'https://placeholder.url/1/large',
                medium: 'https://placeholder.url/1/medium',
                small: 'https://placeholder.url/1/small',
                thumb: 'https://placeholder.url/1/thumb'
            }
        },
        fields: [
            { key: 'title', value: '<p>Mock Title Content</p>' },
            { key: 'content', value: '<p>Mock Content</p>' },
        ],
        owner: {
            member: {
                displayName: 'Mock User',
                name: 'Mock User',
                profilePicture: {
                    __typename: 'Image',
                    url: 'https://via.placeholder.url/1',
                    urls: {
                        full: 'https://via.placeholder.url/1/full',
                        large: 'https://via.placeholder.url/1/large',
                        medium: 'https://via.placeholder.url/1/medium',
                        small: 'https://via.placeholder.url/1/small',
                        thumb: 'https://via.placeholder.url/1/thumb'
                    }
                }
            },
        },
    },
};
