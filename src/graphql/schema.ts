import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
  {
    id: 1,
    name: 'gabriel',
    email: 'gabriel@email.com'
  }
];

const typeDefs = `
  type Users {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [Users!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  }
}

export default makeExecutableSchema({typeDefs, resolvers});