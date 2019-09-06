import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";

class ProductList extends Component {
  render() {
    const pintPrice = (this.props.keg.price / 100).toFixed(2);
    return (
      <div className="product-list">
        <h2>{this.props.keg.name}</h2>
        <h3>{this.props.keg.brand}</h3>
        <p>{this.props.keg.description}</p>
        <p>Ingredients: {this.props.keg.ingredients}</p>
        <ul>
          <li>Pint Price: ${pintPrice}</li>
          <li>Keg Price: ${this.props.keg.price}</li>
        </ul>
      </div>
    );
  }
}

export default ProductList;
