import React from 'react';
import { setCurrentCity, getCityWeatherData } from '../actions'
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'

const SearchCityField = ({currentCity, setCity, getCityWeatherData}) => {
    return (<TextField
        fullWidth = {true}
        hintText = 'Search by city'
        className = 'search-field'
        onKeyPress = {event => {
            if (event.key === 'Enter' && currentCity) {
                getCityWeatherData(event.target.value);
            }
        }}
        onChange = { event => {
            setCity(event.target.value);
        }}
    />)
}

function mapStateToProps (state) {
    return {
        currentCity: state.currentCity
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setCity: (city) => {
            dispatch(setCurrentCity(city));
        },
        getCityWeatherData: (city) => {
            console.log(city);
            dispatch(getCityWeatherData(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCityField)