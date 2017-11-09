import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const cars = [
//   { id: 1, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'blue', price: 33000 },
//   { id: 2, make: 'Chevrolet', model: 'Bolt', year: 2018, color: 'red', price: 43000 },
// ];

class Books extends React.Component {

  render() {
    return <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.props.books.map(book => <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.category}</td>
          <td>{book.author.firstName} {book.author.lastName}</td>
          <td>{book.price}</td>
        </tr>)}
      </tbody>
    </table>;
  }

}

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
    query:'query { books { id, title, category, price, author { firstName, lastName } } }',
    variables:null,
  }),
})
  .then(res => res.json())
  .then(results => {

    ReactDOM.render(
      <Books books={results.data.books} />,
      document.querySelector('main'),
    );

  });


