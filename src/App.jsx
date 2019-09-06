import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Test from "./components/Test";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCardView from "./components/ProductCardView";
import ProductListView from "./components/ProductListView";

const App = ({}) => (
  <Switch>
    <div>
      <Header />
      {/* <Route exact path="/products" component={ProductCardView} />
      <Route exact path="/products/cards" component={ProductCardView} />
      <Route exact path="/products/list" component={ProductListView} /> */}
      <Footer />
    </div>
  </Switch>
);

export default App;
