import { takeEvery } from 'redux-saga/effects';
import { CITY_FORECAST_GET_FORECAST } from '../actions/cityForecast';
import cityForecastSaga from './cityForecast';
import { COMPARISON_FORECAST_GET_CITY_FORECAST } from '../actions/comparisonForecast';
import comparisonForecastSaga from './comparisonForecast';

export default function* rootSaga() {
  yield takeEvery(CITY_FORECAST_GET_FORECAST, cityForecastSaga);
  yield takeEvery(COMPARISON_FORECAST_GET_CITY_FORECAST, comparisonForecastSaga);
}
