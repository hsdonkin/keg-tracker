import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";

class Product extends Component {
  render() {
    const pintPrice = (
      kegsData.kegs[this.props.match.params.id - 1].price / 50
    ).toFixed(2);
    return (
      <div className="product-display-holder">
        <div className="product-image-holder">
          <img src="https://source.unsplash.com/800x800/?beer" />
        </div>
        <div className="product-info">
          <h2>{kegsData.kegs[this.props.match.params.id - 1].name}</h2>
          <hr />
          <h3>
            Produced by: {kegsData.kegs[this.props.match.params.id - 1].brand}
          </h3>
          <h3>ABV: {kegsData.kegs[this.props.match.params.id - 1].abv}%</h3>

          <h3>
            Keg Price: ${kegsData.kegs[this.props.match.params.id - 1].price}
          </h3>
          <h3>Pint Price: ${pintPrice}</h3>
          <hr />
          <h3>Ingredients</h3>
          <p>{kegsData.kegs[this.props.match.params.id - 1].ingredients}</p>
          <hr />
          <h3>Description</h3>
          <p>{kegsData.kegs[this.props.match.params.id - 1].description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
