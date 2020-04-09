import React from 'react';
import Home from  './containers/Home'
import Header from './containers/Header'
import { Router, Route } from 'react-router-dom'
import Details from './containers/Details';
import {routePaths} from './constants'


const createHistory = require("history").createBrowserHistory
const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Route path={routePaths.defult} component={Header} />
      <Route exact path={routePaths.home}  component={Home} />
      <Route exact path ={routePaths.defult}  component={Home} />
      <Route path={routePaths.details} component={Details} />
    </Router>
  );
}

export default App;
