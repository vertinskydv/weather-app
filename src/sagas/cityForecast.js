import { call, put } from 'redux-saga/effects';
import { setForecast, setInputError } from '../actions/cityForecast';
import getCityUrl from '../helpers/urlGenerator';

export default function* cityForecastSaga({ ...action }) {
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
