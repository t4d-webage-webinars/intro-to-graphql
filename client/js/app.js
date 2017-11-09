import * as React from 'react';
import * as ReactDOM from 'react-dom';

const cars = [
  { id: 1, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'blue', price: 33000 },
  { id: 2, make: 'Chevrolet', model: 'Bolt', year: 2018, color: 'red', price: 43000 },
];

class Cars extends React.Component {

  render() {
    return <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.props.cars.map(car => <tr key={car.id}>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>)}
      </tbody>
    </table>;
  }

}


ReactDOM.render(
  <Cars cars={cars} />,
  document.querySelector('main'),
);
