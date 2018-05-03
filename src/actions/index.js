export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

export function setCurrentCity(city) {
    return { type: SET_CURRENT_CITY, payload: city}
}