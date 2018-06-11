import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

class CityForecastSearch extends React.Component {
  state = {
    error: '',
  };

  render() {
    const { city, getForecast, inputChangeHandler } = this.props;
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor='city-forecast-searchline'>City</InputLabel>
        <Input
          id='city-forecast-searchline'
          type='text'
          value={city}
          error={Boolean(this.state.error)}
          helpertext={this.state.error}
          onChange = {inputChangeHandler}
          onKeyPress = {async (event) => {
            if (event.key === 'Enter' && city) {
              const getForecastResult = await getForecast(city);
              if (!getForecastResult.valid) {
                this.setState({ error: getForecastResult.error });
              }
            }
          }}
          onFocus={() => {
            this.setState({ error: '' });
          }}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                  aria-label='Search city forecast'
                  onClick={async () => {
                      const getForecastResult = await getForecast(city);
                      if (!getForecastResult.valid) {
                        this.setState({ error: getForecastResult.error });
                      }
                  }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={Boolean(this.state.error)}>{this.state.error}</FormHelperText>
      </FormControl>
    );
  }
}

export default CityForecastSearch;
