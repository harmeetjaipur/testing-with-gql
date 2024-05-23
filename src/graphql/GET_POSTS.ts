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
        createdAt
        status
        title
        description
        textContent
        thumbnail {
          ... on Image {
            id
            url
          }
        }
        relativeUrl
        url
        owner {
          member {
            name
            id
            bannerId
            status
            username
            email
            url
          }
        }
      }
    }
  }
`;
