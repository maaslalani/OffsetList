import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Company from './Components/Company';
import Home from './Components/Home';
import { ThemeProvider } from 'emotion-theming'
import { preset } from '@rebass/preset'
import './App.css';

const theme = {
  ...preset,
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/:company">
            <Company />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
