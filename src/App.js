import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import { options } from "./configs/routes";

const Home = loadable(() => import("./screens/Home"), options);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
