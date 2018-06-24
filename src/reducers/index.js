import { combineReducers } from 'redux';
import { cityForecast } from './cityForecast';
import { comparisonForecast } from './comparisonForecast';

export default combineReducers({
  cityForecast,
  comparisonForecast
});
