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

  handleNewKegListItem = keg => {
    let tempState = this.state;
    // extra step to create the ID for the keg
    let id = Math.max(...this.state.kegsList.map(keg => keg.id)) + 1;
    keg.id = id;
    tempState.kegsList.push(keg);
    this.setState(tempState);
    console.log("App State Updated: ", this.state);
  };

  // need some logic to update the state of a specific keg, to alter the pints_remain
  handleKegVolumeChange = kegToChange => {
    // let tempState = this.state;
    // let selectedKeg = tempState.kegsList.filter(keg => {
    //   if (keg.id === kegToChange.id) {
    //     return keg;
    //   }
    // });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/products"
            render={props => (
              <ProductCardView
                kegsList={this.state.kegsList}
                path={props.location.pathname}
                onNewKegListItem={this.handleNewKegListItem}
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
                onNewKegListItem={this.handleNewKegListItem}
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
                onNewKegListItem={this.handleNewKegListItem}
              />
            )}
          />
          <Route
            exact
            path="/admin/products"
            render={props => (
              <ProductCardView
                kegsList={this.state.kegsList}
                path={props.location.pathname}
                onNewKegListItem={this.handleNewKegListItem}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
