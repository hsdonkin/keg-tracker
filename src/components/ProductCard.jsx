import React, { Component } from "react";
import kegsData from "./../assets/kegsData.json";
import { Link } from "react-router-dom";
import AddSubtractPints from "./AddSubtractPints";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      keg: this.props.keg
    };
  }

  handleEditFormShow = () => {
    this.setState({ editing: true });
  };

  handleFormChange = () => {
    let tempStateKeg = Object.assign({}, this.state.keg);
    tempStateKeg[event.target.name] = event.target.value;
    this.setState({ editing: true, keg: tempStateKeg });
    event.target.value = this.state.keg[event.target.name];
  };

  handleEditFormSubmit = event => {
    event.preventDefault();
    this.setState({ editing: false, keg: this.state.keg });
    let kegToChange = Object.assign({}, this.props.keg);
    kegToChange.name = event.target.name.value;
    kegToChange.brand = event.target.brand.value;
    kegToChange.price = event.target.price.value;
    kegToChange.abv = event.target.abv.value;
    // hand off the original keg and also the keg with changes to App to update state
    this.props.onKegEdit(this.props.keg, kegToChange);
  };

  render() {
    const pintPrice = (this.props.keg.price / 50).toFixed(2);

    const goodDealStyle = {
      color: "black"
    };

    if (pintPrice < 5) {
      goodDealStyle.color = "lightgreen";
    }

    let editForm;
    let hiddenClass;

    if (this.state.editing === true) {
      // ok, so now editForm becomes a form instead of nothing, so it shows up on the page
      editForm = (
        <form onSubmit={this.handleEditFormSubmit}>
          <h5>Edit: {this.props.keg.name}</h5>
          <label>Name</label>
          <input
            name="name"
            value={this.state.keg.name}
            onChange={this.handleFormChange}
          />{" "}
          <br />
          <label>Brand</label>
          <input
            name="brand"
            value={this.state.keg.brand}
            onChange={this.handleFormChange}
          />
          <br />
          <label>Keg Price</label>
          <input
            name="price"
            value={this.state.keg.price}
            onChange={this.handleFormChange}
          />
          <br />
          <label>ABV%</label>
          <input
            name="abv"
            value={this.state.keg.abv}
            onChange={this.handleFormChange}
          />
          <br />
          <input type="submit" value="Save" />
          <button onClick={() => this.setState({ editing: false })}>
            Cancel
          </button>
        </form>
      );
      hiddenClass = "hidden";
    }

    const adminButtons = () => {
      if (this.props.path === "/admin/products") {
        return (
          <React.Fragment>
            <div className="admin-buttons">
              <h3>Pints Remaining: {this.props.keg.pints_remain}</h3>
              <AddSubtractPints
                keg={this.props.keg}
                onKegVolumeChange={this.props.onKegVolumeChange}
              />
              <button onClick={this.handleEditFormShow}>Edit</button>
            </div>
          </React.Fragment>
        );
      }
    };

    return (
      <div className="product-card">
        <div className={`product-card-info ${hiddenClass}`}>
          <Link to={`/products/` + this.props.keg.id}>
            <h2>{this.props.keg.name}</h2>
          </Link>
          <h3>{this.props.keg.brand}</h3>
          <ul>
            <li style={goodDealStyle}>Pint Price: ${pintPrice}</li>
            <li>Keg Price: ${this.props.keg.price}</li>
          </ul>
        </div>
        {editForm}
        {adminButtons()}
        <Link to={`/products/` + this.props.keg.id} className="details-btn">
          Details
        </Link>
      </div>
    );
  }
}

export default ProductCard;
