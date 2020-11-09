import { gql } from "@apollo/client"

export const issueQuery = (repo = "cosmos-sdk", owner= "cosmos") => gql`query {
  repository(name: "${repo}", owner: "${owner}") {
    id
    issues(last: 30, states: OPEN, orderBy: {field: CREATED_AT, direction: ASC}) {
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

