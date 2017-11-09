import { GraphQLObjectType, GraphQLString } from 'graphql';

export const query = new GraphQLObjectType({

  name: 'Query',

  description: 'Top-level query...',

  fields: () => ({

    message: {
      type: GraphQLString,
      resolve: () => 'Hello World!',
    },
  }),

});