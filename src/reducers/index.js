import { combineReducers } from 'redux';
import { cityForecast } from './cityForecast';
import { historyForecast } from './historyForecast';
import { comparisonForecast } from './comparisonForecast';

export default combineReducers({
  cityForecast,
  historyForecast,
  comparisonForecast
});
