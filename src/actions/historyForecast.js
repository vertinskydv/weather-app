import { getHistoryUrl } from '../helpers/urlGenerator';


export const HISTORY_FORECAST_SET_CITY = 'HISTORY_FORECAST_SET_CITY';
export const HISTORY_FORECAST_SET_DATE = 'HISTORY_FORECAST_SET_DATE';
export const HISTORY_FORECAST_SET_FORECAST = 'HISTORY_FORECAST_SET_FORECAST';

export function setCity(city) {
  return { type: HISTORY_FORECAST_SET_CITY, payload: city };
}

export function setDate(date) {
  return { type: HISTORY_FORECAST_SET_DATE, payload: date };
}

export function setForecast(weather) {
  return { type: HISTORY_FORECAST_SET_FORECAST, payload: weather };
}

export function getForecast(city, date) {
  return async (dispatch) => {
    const weatherResp = await fetch(getHistoryUrl(city, date));
    const weather = await weatherResp.json();
    if (+weather.cod === 200) {
      dispatch(setForecast(weather));
    }
  };
}

