import { combineReducers } from 'redux';
import { cityForecast } from './cityForecast';
import { historyForecast } from './historyForecast';

export default combineReducers({
  cityForecast,
  historyForecast
});
