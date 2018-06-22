import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { CITY_FORECAST_GET_FORECAST, setForecast, setInputError } from '../actions/cityForecast';
import { COMPARISON_FORECAST_ADD_FORECAST } from '../actions/comparisonForecast';
import { getCityUrl } from '../helpers/urlGenerator';

function* getForecastData({ ...action }) {
  const requestUrl = getCityUrl(action.payload);
  let fetchedData = yield call(fetch, requestUrl);
  fetchedData = yield fetchedData.json();
  if (+fetchedData.cod === 200) {
    yield put(setForecast(fetchedData));
  } else if (+fetchedData.cod === 404) {
    yield put(setInputError('The requested city does not exist'));
  } else {
    throw new Error('Request error');
  }
}

function* getComparisonCItyData() {
  yield 1;
}

export default function* rootSaga() {
  yield takeEvery(CITY_FORECAST_GET_FORECAST, getForecastData);
  yield takeEvery(COMPARISON_FORECAST_ADD_FORECAST, getComparisonCItyData);
}
