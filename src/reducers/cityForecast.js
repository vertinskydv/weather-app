import {
  CITY_FORECAST_SET_CITY,
  CITY_FORECAST_SET_FORECAST,
  CITY_FORECAST_SET_INPUT_ERROR
} from '../actions/cityForecast';

export const cityForecastInitial = {
  city: '',
  forecast: null,
  inputError: ''
};

export function cityForecast(state = cityForecastInitial, action) {
  switch (action.type) {
    case CITY_FORECAST_SET_CITY:
      return { ...state, city: action.payload };
    case CITY_FORECAST_SET_FORECAST:
      return { ...state, forecast: action.payload };
    case CITY_FORECAST_SET_INPUT_ERROR:
      return { ...state, inputError: action.payload };
    default:
      return state;
  }
}
