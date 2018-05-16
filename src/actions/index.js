import { weatherUrl, weatherApiKey } from "../config/config"

export const SET_SEARCHLINE = 'SET_SEARCHLINE';
export const SET_THREE_DAY_WEATHER = 'SET_THREE_DAY_WEATHER';
export const GET_CITY_WEATHER_DATA = 'GET_CITY_WEATHER_DATA';

export function setSearchline(city) {
    return { type: SET_SEARCHLINE, payload: city}
}

export function getThreeDayWeatherData(city) {
    return async (dispatch) => {
        const weatherResp = await fetch(`${weatherUrl}forecast?APPID=${weatherApiKey}&q=${city}&units=metric`)
        const weather = await weatherResp.json();
        if (weather.cod == '200') {
            dispatch(setThreeDayWeather(weather));
        }
    }
}

export function setThreeDayWeather(cityWeather) {
    return { type: SET_THREE_DAY_WEATHER, payload: cityWeather}
}