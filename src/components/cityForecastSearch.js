import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

class CityForecastSearch extends React.Component {
    render() {
        const { city, setCity, getForecast } = this.props;
        return (
            <FormControl fullWidth>
                <InputLabel htmlFor="city-forecast-searchline">City</InputLabel>
                <Input
                    id="city-forecast-searchline"
                    type='text'
                    value={city}
                    onChange = { event => {
                        setCity(event.target.value);
                    }}
                    onKeyPress = {event => {
                        if (event.key === 'Enter' && city) {
                            getForecast(city);
                        }
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Search city forecast"
                                onClick={(event) => {
                                    getForecast(city);
                                }}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        )
    }
}

export default CityForecastSearch;