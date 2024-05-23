import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import parse from 'html-react-parser';

import { GET_POST } from '../graphql/GET_POST';
import { PostData } from './types';

const validContent = ['title', 'content'];

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<PostData>(GET_POST, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const post = data?.post;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {post?.thumbnail?.url ? (
                    <img src={post.thumbnail.url} alt={post.title} className="w-full h-64 object-cover mb-4 rounded" />
                ) : (
                    <div className="w-full h-64 bg-gray-300 mb-4 rounded flex items-center justify-center text-gray-500">
                        No Image Available
                    </div>
                )}
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post?.title}</h2>
                <div className="text-gray-700 dark:text-gray-300 mb-4">{post?.description}</div>
                {post?.fields
                    .filter(field => validContent.includes(field.key))
                    .map(field => (
                        <div key={field.key} className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>{field.key}:</strong> <span>{parse(field.value)}</span>
                        </div>
                    ))}
                <p className="text-gray-500 dark:text-gray-400">By: {post?.owner.member.displayName}</p>
                <p className="text-gray-500 dark:text-gray-400">Created at: {post?.createdAt}</p>
            </div>
        </div>
    );
};

export default Post;
