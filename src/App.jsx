import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Test from "./components/Test";

const App = ({}) => (
  <Switch>
    <div>
      <h1>Working</h1>
      <Route exact path="/test" component={Test} />
    </div>
  </Switch>
);

export default App;
