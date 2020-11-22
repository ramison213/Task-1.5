import React from 'react';

const Card = props => (
  <div className="card">
    <img className="card-img-top" src={ props.imgUrl } alt="Product image" />
    <div className="card-body">
      <h5 className="card-title">{ props.title }</h5>
      <p className="card-text">{ props.desc }</p>
      <p className="card-text">Цена: { props.price } $</p>
      <a href="" className="btn btn-primary">Купить</a>
    </div>
  </div>
)

export default Card