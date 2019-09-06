import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Brewery Name</h1>
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}

export default Header;
