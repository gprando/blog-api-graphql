import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
  {
    id: 1,
    name: 'gabriel',
    email: 'gabriel@email.com',
  },
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

  type Mutation {
    createUser(name: String!, email: String!): Users
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users,
  },

  Mutation: {
    createUser: (parent: any, args: {name: string, email: string}) => {
      const newUser = { id: users.length + 1, ...args };
      users.push(newUser);
      return newUser;
    },
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
