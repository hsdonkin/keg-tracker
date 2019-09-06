import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import kegsData from "./../assets/kegsData.json";

class ProductCardView extends Component {
  render() {
    const productCards = kegsData.kegs.map((keg, index) => (
      <ProductCard keg={keg} key={keg.id} />
    ));

    return (
      <React.Fragment>
        <div className="product-nav">
          <h2>Products</h2>
          <Link to="/products/cards">Card View</Link>
          <Link to="/products/list">List View</Link>
        </div>
        <div className="product-card-wrapper">{productCards}</div>
      </React.Fragment>
    );
  }
}

export default ProductCardView;
