import React, { Component } from "react";
import { Link } from "react-router-dom";
import kegsData from "./../assets/kegsData.json";
import ProductList from "./ProductList";

class ProductListView extends Component {
  render() {
    const productListItems = kegsData.kegs.map((keg, index) => (
      <ProductList keg={keg} key={index} />
    ));

    return (
      <div>
        <Link to="/products/cards">Card View</Link>
        <Link to="/products/list">List View</Link>
        {productListItems}
      </div>
    );
  }
}

export default ProductListView;
