import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

class CityForecastSearch extends React.Component {
    render() {
        const { forecastCity, getFiveDayWeatherData, setSearchline } = this.props;
        return (
            <FormControl fullWidth>
                <InputLabel htmlFor="city-forecast-searchline">Select city</InputLabel>
                <Input
                    id="city-forecast-searchline"
                    type='text'
                    value={forecastCity}
                    onChange = { event => {
                        setSearchline(event.target.value);
                    }}
                    onKeyPress = {event => {
                        if (event.key === 'Enter' && forecastCity) {
                            getFiveDayWeatherData(forecastCity);
                        }
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={(event) => {
                                    getFiveDayWeatherData(forecastCity);
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