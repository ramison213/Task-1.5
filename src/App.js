// import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';

const products = [
  {
    id: 1,
    title: 'Ford',
    imgUrl: 'https://picsum.photos/id/1071/200/150',
    price: 3000,
    desc: 'Lorem ipsum'
  },
  {
    id: 2,
    title: 'Mersedes',
    imgUrl: 'https://picsum.photos/id/1072/200/150',
    price: 300,
    desc: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Chevrolet',
    imgUrl: 'https://picsum.photos/id/111/200/150',
    price: 1000,
    desc: 'Lorem ipsum'
  },
  {
    id: 4,
    title: 'Reno',
    imgUrl: 'https://picsum.photos/id/133/200/150',
    price: 2000,
    desc: 'Lorem ipsum'
  },
  {
    id: 5,
    title: 'Opel',
    imgUrl: 'https://picsum.photos/id/183/200/150',
    price: 2500,
    desc: 'Lorem ipsum'
  },
  {
    id: 6,
    title: 'Opel',
    imgUrl: 'https://picsum.photos/id/183/200/150',
    price: 3500,
    desc: 'Lorem ipsum'
  },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        {
          products.map((product, i) => (
            <div className="col col-4 my-3" key={ i }>
              <Card
                imgUrl={ product.imgUrl }
                title={ product.title }
                desc={ product.desc }
                price={ product.price }
              />
            </div>))
        }
      </div>
    </div>
  );
}

export default App;
