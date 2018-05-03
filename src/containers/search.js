import React from 'react';
import { setCurrentCity } from '../actions'
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'

const SearchCityField = ({dispatch}) => (
    <TextField
        fullWidth = {true}
        hintText = 'Search by city'
        className = 'search-field'
        onKeyPress={event => {
            if (event.key === 'Enter' && event.target.value) {
                dispatch(setCurrentCity(event.target.value));
            }
        }}
    />
)

export default connect()(SearchCityField)