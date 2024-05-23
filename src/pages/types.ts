export interface PostData {
    id: string;
    createdAt: string;
    status: string;
    title: string;
    description: string;
    likes: number;
    thumbnail?: {
        url: string;
    };
    relativeUrl: string;
    url: string;
    owner: {
        member: {
            name: string;
            id: string;
            bannerId: string;
            status: string;
            username: string;
            email: string;
            url: string;
        };
    };
}

export interface GetPostsData {
    posts: {
        totalCount: number;
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
        };
        nodes: PostData[];
    };
}

export interface GetPostsVars {
    after?: string;
    filterBy?: {
        keyString: string;
        operator: string;
        value: string;
    }[];
    limit: number;
    orderByString?: string;
    postTypeIds: string[];
    reverse?: boolean;
    spaceIds: string[];
}
