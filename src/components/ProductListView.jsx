import React, { Component } from "react";
import { Link } from "react-router-dom";
import kegsData from "./../assets/kegsData.json";
import ProductList from "./ProductList";

class ProductListView extends Component {
  render() {
    const productListItems = kegsData.kegs.map((keg, index) => (
      <ProductList keg={keg} key={keg.id} />
    ));

    return (
      <React.Fragment>
        <div className="product-nav">
          <Link to="/products/cards">Card View</Link>
          <Link to="/products/list">List View</Link>
        </div>
        <div className="product-list-wrapper">{productListItems}</div>
      </React.Fragment>
    );
  }
}

export default ProductListView;
