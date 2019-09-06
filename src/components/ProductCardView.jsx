import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import kegsData from "./../assets/kegsData.json";

class ProductCardView extends Component {
  render() {
    const productCards = kegsData.kegs.map((keg, index) => (
      <ProductCard keg={keg} key={index} />
    ));

    return (
      <div>
        <Link to="/products/cards">Card View</Link>
        <Link to="/products/list">List View</Link>
        {productCards}
      </div>
    );
  }
}

export default ProductCardView;
