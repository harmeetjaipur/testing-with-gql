import React, { useState, useEffect } from 'react';
import { useQuery, ApolloCache } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { GET_POSTS } from '../graphql/GET_POSTS';
import Loading from '../components/Loading';
import { GetPostsData, GetPostsVars, PostData } from './types';
import { fetchDate } from '../utils';

// PostList component to display a list of posts
const PostList: React.FC = () => {
    const { loading, error, data, fetchMore, client } = useQuery<GetPostsData, GetPostsVars>(GET_POSTS, {
        variables: {
            limit: 3, // Number of posts to fetch initially
            spaceIds: ['jQ6U37yiM2JP'], // Space ID filter
            postTypeIds: ['W99dsSCEVggYqIV'], // Post type ID filter
            orderByString: 'reactionsCount', // Order by reactions count
            reverse: true, // Reverse order
            filterBy: [
                {
                    keyString: 'fields.status', // Filter key
                    operator: 'nin', // Not in operator
                    value: '["clDbTfjFXRZfGrBBCWOJ3","nBOSIoGagWRh7dBY4wgEL"]' // Filter values
                }
            ]
        },
        context: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}` // Authorization header
            }
        },
        fetchPolicy: 'cache-and-network', // Fetch policy
        onCompleted: (data) => {
            const initializedPosts = data.posts.nodes.map(post => ({
                ...post,
                likes: post.likes || 0 // Initialize likes if not present
            }));
            setPosts(initializedPosts); // Set posts state
            setEndCursor(data.posts.pageInfo.endCursor); // Set end cursor for pagination
            setHasNextPage(data.posts.pageInfo.hasNextPage); // Set hasNextPage for pagination
        }
    });

    const [posts, setPosts] = useState<PostData[]>([]); // State to store posts
    const [endCursor, setEndCursor] = useState<string>(''); // State to store end cursor for pagination
    const [hasNextPage, setHasNextPage] = useState<boolean>(false); // State to store if more pages are available

    // Effect to handle data fetching and state initialization
    useEffect(() => {
        if (data) {
            const cachedPosts = data.posts.nodes.map(post => ({
                ...post,
                likes: post.likes || 0 // Initialize likes if not present
            }));
            setPosts(cachedPosts); // Set posts state
            setEndCursor(data.posts.pageInfo.endCursor); // Set end cursor for pagination
            setHasNextPage(data.posts.pageInfo.hasNextPage); // Set hasNextPage for pagination
        }
    }, [data]);

    // Function to load more posts for pagination
    const loadMorePosts = () => {
        if (fetchMore) {
            fetchMore({
                variables: {
                    after: endCursor // Fetch posts after the current end cursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return previousResult;

                    const updatedPosts = [...previousResult.posts.nodes, ...fetchMoreResult.posts.nodes.map(post => ({
                        ...post,
                        likes: post.likes || 0 // Initialize likes if not present
                    }))];

                    return {
                        posts: {
                            totalCount: fetchMoreResult.posts.totalCount,
                            pageInfo: fetchMoreResult.posts.pageInfo,
                            nodes: updatedPosts // Update the posts list with new posts
                        }
                    };
                }
            }).then(result => {
                const { endCursor, hasNextPage } = result.data.posts.pageInfo;
                setEndCursor(endCursor); // Update end cursor for next pagination
                setHasNextPage(hasNextPage); // Update hasNextPage for next pagination
            });
        }
    };

    // Function to handle like action on a post
    const handleLike = (postId: string) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts); // Update posts state with new likes count
        updateCache(client.cache, updatedPosts); // Update the Apollo cache with new likes count
    };

    // Function to update Apollo cache
    const updateCache = (cache: ApolloCache<any>, updatedPosts: PostData[]) => {
        cache.writeQuery<GetPostsData>({
            query: GET_POSTS,
            data: {
                posts: {
                    totalCount: updatedPosts.length,
                    pageInfo: {
                        endCursor,
                        hasNextPage
                    },
                    nodes: updatedPosts // Update the cache with new posts data
                }
            }
        });
    };

    if (loading) return <Loading />; // Show loading component while fetching data
    if (error) return <p>Error: {error.message}</p>; // Show error message if query fails

    return (
        <div className="container mx-auto px-4 py-8" data-testid="posts-list">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
                        <Link to={`/posts/${post.id}`} className="flex-grow">
                            {post.thumbnail?.url ? (
                                <img src={post.thumbnail.url} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />
                            ) : (
                                <div className="w-full h-48 bg-gray-300 mb-4 rounded flex items-center justify-center text-gray-500">
                                    No Image Available
                                </div>
                            )}
                            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400">By: {post.owner.member.name}</p>
                        <p className="text-gray-500 dark:text-gray-400 pb-4">Created at: {fetchDate(post.createdAt)}</p>
                        <button
                            data-testid="thumbs-up"
                            onClick={() => handleLike(post.id)}
                            className="mt-auto w-20 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faThumbsUp} /> <span data-testid={`likes-${post.title}`}>{post.likes}</span> {/* Button to like the post */}
                        </button>
                    </div>
                ))}
            </div>
            {hasNextPage && (
                <div className="flex justify-center mt-6">
                    <button
                        data-testid="load-more"
                        onClick={loadMorePosts}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Show More {/* Button to load more posts */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList; 
