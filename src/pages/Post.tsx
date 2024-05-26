import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, ApolloCache } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { GET_POST } from '../graphql/GET_POST';
import { PostData } from './types';
import Loading from '../components/Loading';
import { fetchDate } from '../utils';

// Post component to display a single post
const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get post id from URL params
    const navigate = useNavigate(); // Hook to programmatically navigate
    const { loading, error, data, } = useQuery<{ post: PostData }>(GET_POST, {
        variables: { id }, // Query for the specific post by id
    });

    const [likes, setLikes] = useState(data?.post.likes || 0); // State to track likes

    if (loading) return <Loading />; // Show loading component while fetching data
    if (error) return <p>Error: {error.message}</p>; // Show error message if query fails

    const post = data?.post; // Get the post data

    const handleLike = () => {
        // Increment likes (using local state as bearer token returns 403 for the mutation)
        setLikes(likes + 1);
    };

    return (
        post && (
            <div className="container mx-auto px-4 py-8" data-testid="post-page">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    {post.thumbnail?.url ? (
                        <img src={post.thumbnail.url} alt={post.title} className="w-full h-64 object-cover mb-4 rounded" />
                    ) : (
                        <div className="w-full h-64 bg-gray-300 mb-4 rounded flex items-center justify-center text-gray-500">
                            No Image Available
                        </div>
                    )}
                    <button
                        onClick={() => navigate('/posts')}
                        className="flex items-center text-blue-500 hover:text-blue-700 mb-4"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back {/* Button to navigate back to posts list */}
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h2>
                    <div className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</div>
                    <p className="text-gray-500 dark:text-gray-400">By: {post.owner.member.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">Created at: {fetchDate(post.createdAt)}</p>
                    <button
                        data-testid="thumbs-up"
                        onClick={handleLike}
                        className="mt-auto w-20 px-4 mt-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
                    >
                        <FontAwesomeIcon icon={faThumbsUp} /> <span data-testid={`likes-${post.title}`}>{likes}</span> {/* Button to like the post */}
                    </button>
                </div>
            </div>
        )
    );
};

export default Post; 
