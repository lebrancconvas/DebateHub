import { ApolloServer, gql } from 'apollo-server';
import axios from 'axios';
import { debateList } from './data';
// import { typeDefs } from './schema';
// import { resolvers } from './resolver';

const PORT = 7901;

const typeDefs = gql`
  type Query {
    data: [Data]
  }

  type Data {
    items: [Item]
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

axios.get('').then(res => {
  let data = res.data;
}).catch(err => {
  console.error(err);
})

const resolvers = {
  Query: {
    data: () => debateList
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: PORT || 7901 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}).catch(err => {
  console.error(err);
});
