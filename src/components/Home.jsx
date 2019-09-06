import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="image-holder">
          <h2>Beer is great.</h2>
          <h3>You've come to the right place.</h3>
          <Link to="/products">
            <h3 id="hero-link">See what we have in stock.</h3>
          </Link>
          <img src="https://source.unsplash.com/800x400/?beer" />
        </div>
      </div>
    );
  }
}

export default Home;
