import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";

class Product extends Component {
  render() {
    console.log(this.props.match);
    // const pintPrice = (
    //   kegsData.kegs[this.props.match.params.id].price / 50
    // ).toFixed(2);
    return (
      <div className="product-display-holder">
        {/* <div className="product-image-holder">
          <img src="https://source.unsplash.com/800x800/?beer" />
        </div>
        <div className="product-info">
          <h2>{kegsData.kegs[this.props.match.params.id].name}</h2>
          <hr />
          <h3>
            Produced by: {kegsData.kegs[this.props.match.params.id].brand}
          </h3>
          <h3>ABV: {kegsData.kegs[this.props.match.params.id].abv}%</h3>

          <h3>Keg Price: ${kegsData.kegs[this.props.match.params.id].price}</h3>
          <h3>Pint Price: ${pintPrice}</h3>
          <hr />
          <h3>Ingredients</h3>
          <p>{kegsData.kegs[this.props.match.params.id].ingredients}</p>
          <hr />
          <h3>Description</h3>
        </div>
        <p>{kegsData.kegs[this.props.match.params.id].description}</p> */}
      </div>
    );
  }
}

export default Product;
