import {
  COMPARISON_FORECAST_ADD_CITY_FORECAST,
  COMPARISON_FORECAST_REMOVE_CITY_FORECAST,
  COMPARISON_FORECAST_SET_SEARCH_INPUT,
  COMPARISON_FORECAST_SET_INPUT_ERROR,
  COMPARISON_FORECAST_SET_SPINNER
} from '../actions/comparisonForecast';

export const comparisonForecastInitial = {
  inputValue: '',
  forecast: {},
  inputError: '',
  loading: false
};

export function comparisonForecast(state = comparisonForecastInitial, action) {
  switch (action.type) {
    case COMPARISON_FORECAST_ADD_CITY_FORECAST:
      return {
        ...state,
        forecast: { ...state.forecast, [action.payload.city]: action.payload.forecast }
      };
    case COMPARISON_FORECAST_REMOVE_CITY_FORECAST: {
      return Object.assign({}, state, {
        forecast: Object.keys(state.forecast).reduce((result, key) => {
          if (key !== action.payload) {
            /* eslint-disable */
            result[key] = state.forecast[key];
            /* eslint-enable */
          }
          return result;
        }, {})
      });
    }
    case COMPARISON_FORECAST_SET_SEARCH_INPUT: {
      return { ...state, inputValue: action.payload };
    }
    case COMPARISON_FORECAST_SET_INPUT_ERROR: {
      return { ...state, inputError: action.payload };
    }
    case COMPARISON_FORECAST_SET_SPINNER: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
}
