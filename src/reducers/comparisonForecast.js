import {
  COMPARISON_FORECAST_ADD_FORECAST,
  COMPARISON_FORECAST_REMOVE_CITY
} from "../actions/comparisonForecast";
  
export const comparisonForecastInitial = {}
  
export function comparisonForecast(state = comparisonForecastInitial, action) {
  switch (action.type) {
    case COMPARISON_FORECAST_ADD_FORECAST:
      return {...state, [action.payload.city]:action.payload.forecast}
    case COMPARISON_FORECAST_REMOVE_CITY:
      let {[action.payload]: value, ...withoutCity} = state;
      console.log(withoutCity);
      return withoutCity;
    default:
      return state
  }
}