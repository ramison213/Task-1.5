import React, { Component } from 'react';

export default class Card extends Component {
  render(props) {
    return (
      <div className="card">
        <img className="card-img-top" src={ this.props.imgUrl } alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{ this.props.title }</h5>
          <p className="card-text">{ this.props.desc }</p>
          <p className="card-text">Цена: { this.props.price } грн</p>
          <button type="button" className="btn btn-primary">Купить</button>
        </div>
      </div>
    )
  }
}
