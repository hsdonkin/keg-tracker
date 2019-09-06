import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";
console.log(kegsData.kegs[0]);

class ProductCard extends Component {
  render() {
    const pintPrice = (this.props.keg.price / 124).toFixed(2);
    return (
      <div className="product-card">
        <h2>{this.props.keg.name}</h2>
        <h3>{this.props.keg.brand}</h3>
        <ul>
          <li>Pint Price: ${pintPrice}</li>
          <li>Keg Price: ${this.props.keg.price}</li>
        </ul>
      </div>
    );
  }
}

export default ProductCard;
