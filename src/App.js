import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from "./containers/header"
import CityForecast from "./containers/cityForecast"

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Header />
          <Switch>
           <Route path='/forecast' component={CityForecast} />
           <Route path='/history-forecast' component={Header} />
           <Redirect from="/" to="/forecast" />
          </Switch>
      </React.Fragment>
    )
  };
}

export default App;
