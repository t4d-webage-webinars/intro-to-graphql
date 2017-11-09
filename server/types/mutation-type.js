import { GraphQLObjectType } from 'graphql';
import fetch from 'node-fetch';

import { BookType } from './book-type';
import { BookInputType } from './book-input-type';

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  // mutation InsertBook($book: BookInput){
  //   insertBook(book: $book) {
  //     id
  //     title
  //     price
  //     author {
  //       firstName
  //     }
  //   }
  // }  


  // {
  //   "book": {
  //    "title": "New Book Webinar 2",
  //    "category": "Tech",
  //    "price": 11.99,
  //    "authorId": 1
  //   }
  // }  

  fields: () => ({
    insertBook: {
      type: BookType,
      args: {
        book: {
          type: BookInputType,
        }
      },
      resolve: (_, { book }) => {

        return fetch('http://localhost:3010/books', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(book),
        })
          .then(res => res.json())
          .then(result => fetch('http://localhost:3010/books/' + result.id))
          .then(res => res.json());

      },
    }
  }),

});