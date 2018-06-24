export const COMPARISON_FORECAST_GET_CITY_FORECAST = 'COMPARISON_FORECAST_GET_CITY_FORECAST';
export const COMPARISON_FORECAST_ADD_CITY_FORECAST = 'COMPARISON_FORECAST_ADD_CITY_FORECAST';
export const COMPARISON_FORECAST_REMOVE_CITY_FORECAST = 'COMPARISON_FORECAST_REMOVE_CITY';
export const COMPARISON_FORECAST_SET_SEARCH_INPUT = 'COMPARISON_FORECAST_SET_SEARCH_INPUT';
export const COMPARISON_FORECAST_SET_INPUT_ERROR = 'COMPARISON_FORECAST_SET_INPUT_ERROR';

export function getCityForecast(city) {
  return { type: COMPARISON_FORECAST_GET_CITY_FORECAST, payload: city };
}

export function addCityForecast(city, forecast) {
  return { type: COMPARISON_FORECAST_ADD_CITY_FORECAST, payload: { city, forecast } };
}

export function setSearchInput(text) {
  return { type: COMPARISON_FORECAST_SET_SEARCH_INPUT, payload: text };
}

export function removeCityForecast(city) {
  return { type: COMPARISON_FORECAST_REMOVE_CITY_FORECAST, payload: city };
}

export function setSearchInputError(error) {
  return { type: COMPARISON_FORECAST_SET_INPUT_ERROR, payload: error };
}
