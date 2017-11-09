import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';

export const AuthorType = new GraphQLObjectType({

  name: 'Author',
  description: 'An author',
  fields: () => ({

    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },

  }),

});