import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import SearchCityField from "./containers/search"
import CityWeatherTabs from "./containers/cityWeatherTabs"

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <SearchCityField />
        <CityWeatherTabs />
      </React.Fragment>
    )
  };
}

export default App;
