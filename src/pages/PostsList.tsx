import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/GET_POSTS';

interface Post {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    owner: {
        member: {
            name: string;
        };
    };
}

interface GetPostsData {
    posts: {
        totalCount: number;
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
        };
        nodes: Post[];
    };
}

interface GetPostsVars {
    after?: string;
    before?: string;
    excludePins?: boolean;
    filterBy?: any[];
    limit: number;
    offset?: number;
    orderBy?: string;
    orderByString?: string;
    postTypeIds: string[];
    reverse?: boolean;
    spaceIds: string[];
    query?: string;
}

const PostList: React.FC = () => {
    const { loading, error, data } = useQuery<GetPostsData, GetPostsVars>(GET_POSTS, {
        variables: {
            limit: 3,
            spaceIds: ['B9cvhV7YvRUm'],
            postTypeIds: ['L80Lq2FKoIaVeYh'],
            orderByString: 'fields.released_on',
            reverse: true,
            filterBy: [],
        },
        context: {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data?.posts.nodes.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>By: {post.owner.member.name}</p>
                    <p>Created at: {post.createdAt}</p>
                </div>
            ))}
            {data?.posts.pageInfo.hasNextPage && (
                <button>Load More</button>
            )}
        </div>
    );
};

export default PostList;
