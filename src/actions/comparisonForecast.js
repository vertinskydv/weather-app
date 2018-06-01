
import { getCityUrl } from '../helpers/urlGenerator';

export const COMPARISON_FORECAST_ADD_FORECAST = "COMPARISON_FORECAST_ADD_FORECAST";
export const COMPARISON_FORECAST_REMOVE_CITY = "COMPARISON_FORECAST_REMOVE_CITY";

export function addCity(city) {
    return async (dispatch) => {
        const forecastResp = await fetch(getCityUrl(city));
        const forecast = await forecastResp.json();
        if (forecast.cod == '200') {
            dispatch(addForecast(city, forecast));
        }
    }
}

export function removeCity(city) {
    return {type: COMPARISON_FORECAST_REMOVE_CITY, payload: city}
}

export function addForecast(city, forecast) {
    return {type: COMPARISON_FORECAST_ADD_FORECAST, payload: {city, forecast}}
}