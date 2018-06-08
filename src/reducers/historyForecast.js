import {
  HISTORY_FORECAST_SET_CITY,
  HISTORY_FORECAST_SET_DATE,
  HISTORY_FORECAST_SET_FORECAST
} from '../actions/historyForecast';

export const historyForecastInitial = {
  city: '',
  forecast: null,
  date: new Date()
};

export function historyForecast(state = historyForecastInitial, action) {
  switch (action.type) {
    case HISTORY_FORECAST_SET_CITY:
      return { ...state, city: action.payload };
    case HISTORY_FORECAST_SET_DATE:
      return { ...state, date: action.payload };
    case HISTORY_FORECAST_SET_FORECAST:
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
}
