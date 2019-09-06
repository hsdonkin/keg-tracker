import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";
console.log(kegsData.kegs[0]);

class ProductCard extends Component {
  render() {
    const pintPrice = (kegsData.kegs[0].price / 124).toFixed(2);
    return (
      <div className="product-card">
        <h2>{kegsData.kegs[0].name}</h2>
        <h3>{kegsData.kegs[0].brand}</h3>
        <p>{kegsData.kegs[0].description}</p>
        <p>Ingredients: {kegsData.kegs[0].ingredients}</p>
        <ul>
          <li>Pint Price: ${pintPrice}</li>
          <li>Keg Price: ${kegsData.kegs[0].price}</li>
        </ul>
      </div>
    );
  }
}

export default ProductCard;
