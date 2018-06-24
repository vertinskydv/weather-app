import { call, put } from 'redux-saga/effects';
import getCityUrl from '../helpers/urlGenerator';
import { addCityForecast, setSearchInputError, setSearchInput, setSpinner } from '../actions/comparisonForecast';

export default function* comparisonForecastSaga({ ...action }) {
  const requestUrl = getCityUrl(action.payload);
  yield put(setSpinner(true));
  let fetchedData = yield call(fetch, requestUrl);
  fetchedData = yield fetchedData.json();
  switch (+fetchedData.cod) {
    case 200:
      yield put(addCityForecast(action.payload, fetchedData));
      yield put(setSpinner(false));
      yield put(setSearchInput(''));
      break;
    case 404:
      yield put(setSearchInputError('The requested city does not exist'));
      yield put(setSpinner(false));
      break;
    default:
      yield put(setSpinner(false));
      throw new Error('Request error');
  }
}
