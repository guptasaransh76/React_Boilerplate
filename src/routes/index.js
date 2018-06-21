import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';

export default () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" render={props => <Home {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/about" render={props => <About {...props} />} />
    </Switch>
  </BrowserRouter>
};
