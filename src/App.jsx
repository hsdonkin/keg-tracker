import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Test from "./components/Test";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCardView from "./components/ProductCardView";
import ProductListView from "./components/ProductListView";
import Product from "./components/Product";
import Home from "./components/Home";
import kegsData from "./assets/kegsData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegsList: kegsData.kegs
    };
  }

  render() {
    return (
      <Switch>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/products"
            render={props => (
              <ProductCardView
                kegsList={this.state.kegsList}
                path={props.location.pathname}
              />
            )}
          />
          <Route
            exact
            path="/products/cards"
            render={props => (
              <ProductCardView
                kegsList={this.state.kegsList}
                path={props.location.pathname}
              />
            )}
          />
          <Route
            exact
            path="/products/list"
            render={props => (
              <ProductListView
                kegsList={this.state.kegsList}
                path={props.location.pathname}
              />
            )}
          />

          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
