import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
  };

  // need some logic to update the state of a specific keg, to alter the pints_remain
  handleKegVolumeChange = (kegToChange, amount) => {
    // have to slice here so that tempKegsList doesn't point to the array in state
    let tempKegsList = this.state.kegsList.slice();
    // filter through the list and find the keg with the matching ID
    let selectedKeg = tempKegsList.filter((keg, index) => {
      if (keg.id === kegToChange.id) {
        // splice needs a second argument that is the number of things to take away
        // this led to a funny glitch where it would delete everything from the array after the thing changed
        // oops
        tempKegsList.splice(index, 1);
        return keg;
      }
    })[0];
    selectedKeg.pints_remain += amount;
    tempKegsList.push(selectedKeg);
    // sort tempKegsList by ID to keep things in order on the page after pushing it
    tempKegsList.sort(function(a, b) {
      return a.id - b.id;
    });
    this.setState({ kegsList: tempKegsList });
    this.forceUpdate();
  };

  handleKegEdit = (kegToChange, kegWithChanges) => {
    // haha what is dry code
    // really though this broke for some reason when I tried to outsource it to a function returning the selected keg
    // have to slice here so that tempKegsList doesn't point to the array in state
    let tempKegsList = this.state.kegsList.slice();
    // filter through the list and find the keg with the matching ID
    let selectedKeg = tempKegsList.filter((keg, index) => {
      if (keg.id === kegToChange.id) {
        // splice needs a second argument that is the number of things to take away
        // this led to a funny glitch where it would delete everything from the array after the thing changed
        // oops
        tempKegsList.splice(index, 1);
        return keg;
      }
    })[0];
    // can kinda just throw away the old keg here after we pull it out of array
    tempKegsList.push(kegWithChanges);
    tempKegsList.sort(function(a, b) {
      return a.id - b.id;
    });
    this.setState({ kegsList: tempKegsList });
    this.forceUpdate();
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
                onKegVolumeChange={this.handleKegVolumeChange}
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
                onKegVolumeChange={this.handleKegVolumeChange}
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
                onKegVolumeChange={this.handleKegVolumeChange}
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
                onKegVolumeChange={this.handleKegVolumeChange}
                onKegEdit={this.handleKegEdit}
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
