import React, { useState, useEffect } from "react";
import Header from "./components/navigation/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { options } from "./configs/routes";
import { darkTheme, lightTheme } from "./styles/theme";
import { Provider } from "react-redux";
import store from "./redux/store";

const Home = loadable(() => import("./screens/Home"), options);
const About = loadable(() => import("./screens/About"), options);

const App = () => {
  console.log(darkTheme);
  const [theme, setTheme] = useState(darkTheme);

  const onThemeChange = e => {
    e ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <div className="App">
      <Header handleChange={onThemeChange} theme={{ ...theme }} />

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} theme={theme} />}
          />
          <Route
            exact
            path="/about"
            render={props => <About {...props} theme={theme} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
