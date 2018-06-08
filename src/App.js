import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MainHeader from './components/mainHeader';
import CityForecast from './containers/cityForecast';
import CityForecastSearch from './containers/cityForecastSearch';
import ForecastComparison from './containers/forecastComparison';

import './App.css';

function App() {
  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <CssBaseline />
      <MainHeader />
      <Switch>
      <Route path='/forecast' render={() => (
          <CityForecast searchComponent={<CityForecastSearch />} />
      )} />
      <Route path='/forecast-comparison' render={() => (
          <ForecastComparison/>
      )} />
      <Redirect from='/' to='/forecast' />
      </Switch>
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default App;
