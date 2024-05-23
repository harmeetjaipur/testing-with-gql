import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { GET_POST } from '../graphql/GET_POST';
import { PostData } from './types';
import Loading from '../components/Loading';
import { fetchDate } from '../utils';

const validContent = ['title', 'content'];

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery<PostData>(GET_POST, {
        variables: { id },
    });

    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

    const post = data?.post;

    console.log(post)

    return (
        post && <div className="container mx-auto px-4 py-8" data-testid="post-page">
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
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h2>
                <div className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</div>

                <p className="text-gray-500 dark:text-gray-400">By: {post.owner.member.name}</p>
                <p className="text-gray-500 dark:text-gray-400">Created at: {fetchDate(post.createdAt)}</p>
            </div>
        </div>
    );
};

export default Post;
