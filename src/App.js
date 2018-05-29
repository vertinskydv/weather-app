import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import Header from "./containers/header";
import CityForecast from "./containers/cityForecast";
import CityForecastSearch from "./containers/cityForecastSearch";
import HistoryForecastSearch from "./containers/historyForecastSearch";

import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <CssBaseline />
          <Header />
          <Switch>
          <Route path='/forecast'  render={() => {
            return (
              <CityForecast searchComponent={<CityForecastSearch />} />
            );
            }} />
          <Route path='/history-forecast' render={() => {
            return (
              <CityForecast searchComponent={<HistoryForecastSearch />} />
            ); 
            }} />
          <Redirect from="/" to="/forecast" />
          </Switch>
        </React.Fragment>

    )
  };
}

export default App;
