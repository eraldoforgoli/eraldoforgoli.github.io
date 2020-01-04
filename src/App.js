import React, { useState } from "react";
import Header from "./components/navigation/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { options } from "./configs/routes";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";

const Home = loadable(() => import("./screens/Home"), options);

const StyledHeader = styled.header`
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const onThemeChange = e => {
    e ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <div className="App">
      <StyledHeader className="App-header">
        <Header handleChange={onThemeChange} />
      </StyledHeader>

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} theme={theme} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
