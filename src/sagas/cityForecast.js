import { call, put } from 'redux-saga/effects';
import { setForecast, setInputError, setSpinner } from '../actions/cityForecast';
import getCityUrl from '../helpers/urlGenerator';

export default function* cityForecastSaga({ ...action }) {
  const requestUrl = getCityUrl(action.payload);
  yield put(setSpinner(true));
  let fetchedData = yield call(fetch, requestUrl);
  fetchedData = yield fetchedData.json();
  switch (+fetchedData.cod) {
    case 200:
      yield put(setForecast(fetchedData));
      yield put(setSpinner(false));
      break;
    case 404:
      yield put(setInputError('The requested city does not exist'));
      yield put(setSpinner(false));
      break;
    default:
      yield put(setSpinner(false));
      throw new Error('Request error');
  }
}

