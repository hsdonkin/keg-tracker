import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";
import { Link } from "react-router-dom";
import AddSubtractPints from "./AddSubtractPints";

class ProductCard extends Component {
  render() {
    const pintPrice = (this.props.keg.price / 50).toFixed(2);

    const goodDealStyle = {
      color: "black"
    };

    if (pintPrice < 5) {
      goodDealStyle.color = "lightgreen";
    }

    const adminButtons = () => {
      if (this.props.path == "/admin/products") {
        return (
          <React.Fragment>
            <h3>Pints Remaining: {this.props.keg.pints_remain}</h3>
            <AddSubtractPints />
          </React.Fragment>
        );
      }
    };

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
        {adminButtons()}
        <Link to={`/products/` + this.props.keg.id} className="details-btn">
          Details
        </Link>
      </div>
    );
  }
}

export default ProductCard;
