import { SET_CURRENT_CITY } from "../actions";

const initialState = {
  currentCity: ''
}

export default function weatherApp(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_CITY:
        return {...state, currentCity: action.payload}
        break;
      case 'eee':
        break;
      default:
        return state
    }
  }