import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  render() {
    const pintPrice = (this.props.keg.price / 50).toFixed(2);

    const goodDealStyle = {
      color: "black"
    };

    if (pintPrice < 5) {
      goodDealStyle.color = "lightgreen";
    }

    return (
      <div className="product-card">
        <Link to={`/products/` + this.props.keg.id}>
          <h2>{this.props.keg.name}</h2>
        </Link>
        <h3>{this.props.keg.brand}</h3>
        <ul>
          <li style={goodDealStyle}>Pint Price: ${pintPrice}</li>
          <li>Keg Price: ${this.props.keg.price}</li>
        </ul>
        <Link to={`/products/` + this.props.keg.id} className="details-btn">
          Details
        </Link>
      </div>
    );
  }
}

export default ProductCard;
