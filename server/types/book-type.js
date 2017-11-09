import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';
import fetch from 'node-fetch';

import { AuthorType } from './author-type';

export const BookType = new GraphQLObjectType({

  name: 'Book',
  description: 'A book',
  fields: () => ({

    id: {
      type: GraphQLInt,
      //resolve: (book) => book.id, 
    },
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLFloat },
    authorId: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve: (book) => {

        return fetch('http://localhost:3010/authors/' + encodeURIComponent(book.authorId))
          .then(res => res.json());        

      },
    }

  }),

});