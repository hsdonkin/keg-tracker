import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import kegsData from "./../assets/kegsData.json";
import NewKegForm from "./NewKegForm";

function ProductCardView(props) {
  const productCards = props.kegsList.map((keg, index) => (
    <ProductCard
      keg={keg}
      key={keg.id}
      path={props.path}
      onKegVolumeChange={props.onKegVolumeChange}
      onKegEdit={props.onKegEdit}
    />
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
      <div className="product-card-wrapper">{productCards}</div>
    </React.Fragment>
  );
}

export default ProductCardView;
