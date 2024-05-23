import React, { useState, useEffect } from 'react';
import { useQuery, ApolloCache } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { GET_POSTS } from '../graphql/GET_POSTS';
import Loading from '../components/Loading';
import { GetPostsData, GetPostsVars, PostData } from './types';
import { fetchDate } from '../utils';

const PostList: React.FC = () => {
    const { loading, error, data, fetchMore, client } = useQuery<GetPostsData, GetPostsVars>(GET_POSTS, {
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
                    value: '["clDbTfjFXRZfGrBBCWOJ3","nBOSIoGagWRh7dBY4wgEL"]'
                }
            ]
        },
        context: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            const initializedPosts = data.posts.nodes.map(post => ({
                ...post,
                likes: post.likes || 0
            }));
            setPosts(initializedPosts);
            setEndCursor(data.posts.pageInfo.endCursor);
            setHasNextPage(data.posts.pageInfo.hasNextPage);
        }
    });

    const [posts, setPosts] = useState<PostData[]>([]);
    const [endCursor, setEndCursor] = useState<string>('');
    const [hasNextPage, setHasNextPage] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            const cachedPosts = data.posts.nodes.map(post => ({
                ...post,
                likes: post.likes || 0
            }));
            setPosts(cachedPosts);
            setEndCursor(data.posts.pageInfo.endCursor);
            setHasNextPage(data.posts.pageInfo.hasNextPage);
        }
    }, [data]);

    const loadMorePosts = () => {
        if (fetchMore) {
            fetchMore({
                variables: {
                    after: endCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return previousResult;

                    const updatedPosts = [...previousResult.posts.nodes, ...fetchMoreResult.posts.nodes.map(post => ({
                        ...post,
                        likes: post.likes || 0
                    }))];

                    return {
                        posts: {
                            totalCount: fetchMoreResult.posts.totalCount,
                            pageInfo: fetchMoreResult.posts.pageInfo,
                            nodes: updatedPosts
                        }
                    };
                }
            }).then(result => {
                const { endCursor, hasNextPage } = result.data.posts.pageInfo;
                setEndCursor(endCursor);
                setHasNextPage(hasNextPage);
            });
        }
    };

    const handleLike = (postId: string) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);
        updateCache(client.cache, updatedPosts);
    };

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
                    nodes: updatedPosts
                }
            }
        });
    };

    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

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
                            <FontAwesomeIcon icon={faThumbsUp} /> <span data-testid={`likes-${post.title}`}>{post.likes}</span>
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
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;
