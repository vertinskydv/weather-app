import {
  CITY_FORECAST_SET_CITY,
  CITY_FORECAST_SET_FORECAST
} from '../actions/cityForecast';

export const cityForecastInitial = {
  city: '',
  forecast: null,
};

export function cityForecast(state = cityForecastInitial, action) {
  switch (action.type) {
    case CITY_FORECAST_SET_CITY:
      return { ...state, city: action.payload };
    case CITY_FORECAST_SET_FORECAST:
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
}
