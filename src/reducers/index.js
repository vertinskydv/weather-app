import { SET_SEARCHLINE, SET_THREE_DAY_WEATHER } from "../actions";

export const initialState = {
  searchline: '',
  threeDayWeather: null
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCHLINE:
        return {...state, searchline: action.payload}
      case SET_THREE_DAY_WEATHER:
        return {...state, threeDayWeather: action.payload}
      default:
        return state
    }
  }