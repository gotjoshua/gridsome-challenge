import { gql } from '@apollo/client'

export const issueQuery = (repo = 'cosmos-sdk', owner = 'cosmos') => gql`query repository($after: String){
  repository(name: "${repo}", owner: "${owner}") {
    id
    issues(after: $after, first: 10, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
      pageInfo {
        endCursor
        hasNextPage
      },
      edges {
        node {
          id
          createdAt
          title
          author {
            avatarUrl
            ... on User {
              id
              email
              name
              login
            }
          }
        }
      }
    }
  }
}`
