import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" render={props => <Home {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/about" render={props => <About {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
