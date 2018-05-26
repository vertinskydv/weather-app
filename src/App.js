import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./containers/header"
import CityForecast from "./containers/cityForecast"

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Header />
          <CityForecast />
      </React.Fragment>
    )
  };
}

export default App;
