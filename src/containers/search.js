import React from 'react';
import { setSearchline, getThreeDayWeatherData } from '../actions'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'

const SearchCityField = ({searchline, setSearchline, getThreeDayWeatherData}) => {
    return (<TextField
        fullWidth = {true}
        hinttext = 'Search by city'
        className = 'search-field'
        onKeyPress = {event => {
            if (event.key === 'Enter' && searchline) {
                getThreeDayWeatherData(searchline);
            }
        }}
        onChange = { event => {
            setSearchline(event.target.value);
        }}
    />)
}

function mapStateToProps (state) {
    return {
        searchline: state.searchline
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setSearchline: (city) => {
            dispatch(setSearchline(city));
        },
        getThreeDayWeatherData: (city) => {
            dispatch(getThreeDayWeatherData(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCityField)