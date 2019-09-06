import React, { Component } from "react";
import ProductCard from "./ProductCard";
import kegsData from "./../assets/kegsData.json";

class ProductCardView extends Component {
  render() {
    const productCards = kegsData.kegs.map((keg, index) => (
      <ProductCard keg={keg} key={index} />
    ));

    return <div>{productCards}</div>;
  }
}

export default ProductCardView;
