import { call, put } from 'redux-saga/effects';
import getCityUrl from '../helpers/urlGenerator';
import { addCityForecast, setSearchInputError, setSearchInput } from '../actions/comparisonForecast';

export default function* comparisonForecastSaga({ ...action }) {
  const requestUrl = getCityUrl(action.payload);
  let fetchedData = yield call(fetch, requestUrl);
  fetchedData = yield fetchedData.json();
  switch (+fetchedData.cod) {
    case 200:
      yield put(addCityForecast(action.payload, fetchedData));
      yield put(setSearchInput(''));
      break;
    case 404:
      yield put(setSearchInputError('The requested city does not exist'));
      break;
    default:
      throw new Error('Request error');
  }
}
