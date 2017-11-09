import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import fetch from 'node-fetch';
import { BookType } from './book-type';

export const query = new GraphQLObjectType({

  name: 'Query',

  description: 'Top-level query...',

  fields: () => ({

    message: {
      type: GraphQLInt,
      resolve: () => {
        return 42;
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: () => {
        return fetch('http://localhost:3010/books')
          .then(res => res.json());
      }
    },

    // query GetBookById($bookId: Int){
    //   book(id: $bookId) {
    //     id
    //     title
    //     price
    //   }
    // }

    // {
    //   "bookId": 9
    // }

    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLInt,
        }
      },
      resolve: (_, { id }) => {
        return fetch('http://localhost:3010/books/' + encodeURIComponent(id))
          .then(res => res.json());
      }
    }
  }),

});