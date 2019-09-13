import React, { Component } from "react";
import { Link } from "react-router-dom";
import kegsData from "./../assets/kegsData.json";
import ProductList from "./ProductList";
import NewKegForm from "./NewKegForm";

function ProductListView(props) {
  const productListItems = props.kegsList.map((keg, index) => (
    <ProductList keg={keg} key={keg.id} />
  ));

  // conditional rending for NewKegForm based on whether path includes admin
  const AdminKegFormCheck = () => {
    if (
      props.path === "/admin/products" ||
      props.path === "/admin/products/cardview"
    ) {
      return <NewKegForm onNewKegListItem={props.onNewKegListItem} />;
    }
  };

  return (
    <React.Fragment>
      {AdminKegFormCheck()}
      <div className="product-nav">
        <h2>Products</h2>
        <Link to="/products/cards">Card View</Link>
        <Link to="/products/list">List View</Link>
      </div>
      <div className="product-list-wrapper">{productListItems}</div>
    </React.Fragment>
  );
}

export default ProductListView;
