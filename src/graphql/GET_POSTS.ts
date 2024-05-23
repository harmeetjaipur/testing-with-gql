import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts(
    $after: String
    $filterBy: [PostListFilterByInput!]
    $limit: Int!
    $orderByString: String
    $postTypeIds: [String!]
    $reverse: Boolean
    $spaceIds: [ID!]
  ) {
    posts(
      after: $after
      filterBy: $filterBy
      limit: $limit
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
      spaceIds: $spaceIds
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        slug
        reactionsCount
        hasMoreContent
        shortContent
        createdAt
        publishedAt
        ownerId
        createdById
        status
        repliesCount
        totalRepliesCount
        title
        description
        textContent
        thumbnail {
          ... on Image {
            __typename
            id
            url
            width
            height
            dominantColorHex
            dpi
            cropHeight
            cropWidth
            cropX
            cropY
            cropZoom
            urls {
              __typename
              full
              large
              medium
              small
              thumb
            }
          }
        }
        relativeUrl
        url
        owner {
          __typename
          member {
            name
            id
            locale
            profilePictureId
            bannerId
            status
            username
            email
            emailStatus
            newEmail
            tagline
            createdAt
            updatedAt
            url
            profilePicture {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
            }
          }
        }
      }
    }
  }
`;
