import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    items: [Item]
  }

  type Item {
    snippet: Snippet
  }

  type Snippet {
    publishedAt: String
    title: String
    description: String
    thumbnails: Thumbnails
    channelTitle: String
    tags: [String]
  }

  type Thumbnails {
    default: Thumbnail
    medium: Thumbnail
  }

  type Thumbnail {
    url: String
    width: Int
    height: Int
  }
`;
