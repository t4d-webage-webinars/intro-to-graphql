import { GraphQLInputObjectType, GraphQLString, GraphQLFloat, GraphQLInt } from 'graphql';

export const BookInputType = new GraphQLInputObjectType({

  name: 'BookInput',

  fields: () => ({
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLFloat },
    authorId: { type: GraphQLInt },    
  }),

});