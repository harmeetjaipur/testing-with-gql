export interface PostData {
    post: {
        id: string;
        slug: string;
        fields: { key: string; value: string }[];
        postTypeId: string;
        reactionsCount: number;
        hasMoreContent: boolean;
        isAnonymous: boolean;
        isHidden: boolean;
        shortContent: string;
        createdAt: string;
        publishedAt: string;
        ownerId: string;
        createdById: string;
        status: string;
        spaceId: string;
        imageIds: string[];
        pinnedInto: string[];
        repliesCount: number;
        totalRepliesCount: number;
        locked: boolean;
        repliedToIds: string[];
        repliedToId: string;
        title: string;
        description: string;
        thumbnail: {
            __typename: string;
            id: string;
            url: string;
            width: number;
            height: number;
            dominantColorHex: string;
            dpi: number;
            cropHeight: number;
            cropWidth: number;
            cropX: number;
            cropY: number;
            cropZoom: number;
            urls: {
                __typename: string;
                full: string;
                large: string;
                medium: string;
                small: string;
                thumb: string;
            };
        };
        language: string;
        relativeUrl: string;
        url: string;
        owner: {
            __typename: string;
            member: {
                displayName: string;
                name: string;
                id: string;
                locale: string;
                profilePictureId: string;
                bannerId: string;
                status: string;
                username: string;
                email: string;
                emailStatus: string;
                newEmail: string;
                tagline: string;
                createdAt: string;
                updatedAt: string;
                url: string;
                profilePicture: {
                    __typename: string;
                    id: string;
                    url: string;
                    width: number;
                    height: number;
                    dominantColorHex: string;
                    dpi: number;
                    cropHeight: number;
                    cropWidth: number;
                    cropX: number;
                    cropY: number;
                    cropZoom: number;
                    urls: {
                        __typename: string;
                        full: string;
                        large: string;
                        medium: string;
                        small: string;
                        thumb: string;
                    };
                };
                badges: {
                    backgroundColor: string;
                    badgeId: string;
                    imageId: string;
                    longDescription: string;
                    text: string;
                    shortDescription: string;
                    textColor: string;
                    type: string;
                }[];
            };
        };
        tags: {
            description: string;
            id: string;
            slug: string;
            title: string;
        }[];
        reactions: {
            count: number;
            reacted: boolean;
            reaction: string;
            participants: {
                nodes: {
                    participant: {
                        id: string;
                        name: string;
                    };
                }[];
            };
        }[];
        replies: {
            nodes: {
                id: string;
                slug: string;
                mappingFields: { key: string; type: string; value: string }[];
                fields: {
                    key: string;
                    value: string;
                    relationEntities: {
                        __typename: string;
                        medias: {
                            __typename: string;
                            id: string;
                            url: string;
                            width: number;
                            height: number;
                            dominantColorHex: string;
                            dpi: number;
                            cropHeight: number;
                            cropWidth: number;
                            cropX: number;
                            cropY: number;
                            cropZoom: number;
                            urls: {
                                __typename: string;
                                full: string;
                                large: string;
                                medium: string;
                                small: string;
                                thumb: string;
                            };
                        }[];
                        members: {
                            __typename: string;
                            displayName: string;
                            name: string;
                            id: string;
                            profilePicture: {
                                __typename: string;
                                url: string;
                            };
                        }[];
                        posts: {
                            __typename: string;
                            title: string;
                            description: string;
                        }[];
                        spaces: {
                            __typename: string;
                            name: string;
                            description: string;
                        }[];
                        tags: {
                            __typename: string;
                            title: string;
                        }[];
                    };
                }[];
                title: string;
                description: string;
                thumbnail: {
                    __typename: string;
                    id: string;
                    url: string;
                };
            }[];
        };
    };
}


export interface Post {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    likes: number;
    thumbnail: {
        url: string;
    };
    owner: {
        member: {
            name: string;
        };
    };
}

export interface GetPostsData {
    posts: {
        totalCount: number;
        pageInfo: {
            endCursor: string | null;
            hasNextPage: boolean;
        };
        nodes: Post[];
    };
}

export interface GetPostsVars {
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
