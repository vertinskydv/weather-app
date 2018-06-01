import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MainHeader from "./components/mainHeader";
import CityForecast from "./containers/cityForecast";
import HistoryForecast from "./containers/historyForecast";
import CityForecastSearch from "./containers/cityForecastSearch";
import HistoryForecastSearch from "./containers/historyForecastSearch";
import ForecastComparison from "./containers/forecastComparison";

import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <MuiPickersUtilsProvider utils={MomentUtils}>
          <CssBaseline />
          <MainHeader />
          <Switch>
          <Route path='/forecast'  render={() => {
            return (
              <CityForecast searchComponent={<CityForecastSearch />} />
            );
            }} />
          <Route path='/history-forecast' render={() => {
            return (
              <HistoryForecast searchComponent={<HistoryForecastSearch />} />
            ); 
            }} />
          <Route path='/forecast-comparison' render={() => {
            return (
              <ForecastComparison/>
            ); 
            }} />
          <Redirect from="/" to="/forecast" />
          </Switch>
          </MuiPickersUtilsProvider>
        </React.Fragment>
    )
  };
}

export default App;
