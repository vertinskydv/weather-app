import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import appReducer from './reducers';
import { cityForecastInitial } from './reducers/cityForecast';
import { historyForecastInitial } from './reducers/historyForecast';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialReducerState = {
    cityForecast: cityForecastInitial,
    historyForecast: historyForecastInitial,
};
const store = createStore(appReducer, initialReducerState, composeEnhancers(
    applyMiddleware(thunk)
));
/* eslint-enable */

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
