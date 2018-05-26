import { SET_SEARCHLINE, SET_FIVE_DAY_WEATHER } from "../actions";

export const initialState = {
  forecastCity: '',
  fiveDayWeather: null
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCHLINE:
        return {...state, forecastCity: action.payload}
      case SET_FIVE_DAY_WEATHER:
        return {...state, fiveDayWeather: action.payload}
      default:
        return state
    }
  }