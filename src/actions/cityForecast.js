import { getCityUrl } from '../helpers/urlGenerator';

export const CITY_FORECAST_SET_CITY = 'CITY_FORECAST_SET_CITY';
export const CITY_FORECAST_SET_FORECAST = 'CITY_FORECAST_SET_FORECAST';
export const CITY_FORECAST_GET_FORECAST = 'CITY_FORECAST_GET_FORECAST';

export function setCity(city) {
    return { type: CITY_FORECAST_SET_CITY, payload: city}
}

export function getForecast(city) {
    return async (dispatch) => {
        const weatherResp = await fetch(getCityUrl(city));
        const weather = await weatherResp.json();
        if (weather.cod == '200') {
            dispatch(setForecast(weather));
            return {valid: true};
        }
        else {
            return {valid: false, error: 'City is not correct'};
        }
    }
}

export function setForecast(cityWeather) {
    return {type: CITY_FORECAST_SET_FORECAST, payload: cityWeather}
}