import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import appReducer from './reducers';
import saga from './sagas';
import { cityForecastInitial } from './reducers/cityForecast';
import { comparisonForecastInitial } from './reducers/comparisonForecast';


/* eslint-disable */
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialReducerState = {
  cityForecast: cityForecastInitial,
  comparisonForecast: comparisonForecastInitial
};
const store = createStore(appReducer, initialReducerState, composeEnhancers(applyMiddleware(sagaMiddleware)));
/* eslint-enable */

sagaMiddleware.run(saga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
