export const CITY_FORECAST_SET_CITY = 'CITY_FORECAST_SET_CITY';
export const CITY_FORECAST_SET_FORECAST = 'CITY_FORECAST_SET_FORECAST';
export const CITY_FORECAST_GET_FORECAST = 'CITY_FORECAST_GET_FORECAST';
export const CITY_FORECAST_SET_INPUT_ERROR = 'CITY_FORECAST_SET_INPUT_ERROR';

export function setCity(city) {
  return { type: CITY_FORECAST_SET_CITY, payload: city };
}

export function setForecast(cityWeather) {
  return { type: CITY_FORECAST_SET_FORECAST, payload: cityWeather };
}

export function getForecast(city) {
  return { type: CITY_FORECAST_GET_FORECAST, payload: city };
}

export function setInputError(error) {
  return { type: CITY_FORECAST_SET_INPUT_ERROR, payload: error };
}
