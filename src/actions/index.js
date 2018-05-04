import { weatherUrl, weatherApiKey } from "../config/config"

export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const GET_CITY_WEATHER_DATA = 'GET_CITY_WEATHER_DATA';

export function setCurrentCity(city) {
    return { type: SET_CURRENT_CITY, payload: city}
}

export function getCityWeatherData(city) {
    return async (dispatch) => {
        const weatherResp = await fetch(`${weatherUrl}forecast?APPID=${weatherApiKey}&q=${city}&units=metric`)
        const weather = await weatherResp.json();
        console.log(weather);

    }
}