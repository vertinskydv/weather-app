import { SET_CURRENT_CITY } from "../actions";

export const initialState = {
  currentCity: ''
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_CITY:
      return {...state, currentCity: action.payload}
      case 'eee':
        break;
      default:
        return state
    }
  }