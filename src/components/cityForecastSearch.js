import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

class CityForecastSearch extends React.Component {
  render() {
    const {
      city,
      inputError,
      searchHandler,
      inputChangeHandler,
      inputKeydownHandler
    } = this.props;
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor='city-forecast-searchline'>City</InputLabel>
        <Input
          id='city-forecast-searchline'
          type='text'
          value={city}
          error={Boolean(inputError)}
          helpertext={inputError}
          onChange = {inputChangeHandler}
          onKeyPress = {(e) => {
            inputKeydownHandler(e, city);
          }}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                  aria-label='Search city forecast'
                  onClick={() => {
                    if (city) {
                      searchHandler(city);
                    }
                  }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={Boolean(inputError)}>{inputError}</FormHelperText>
      </FormControl>
    );
  }
}

export default CityForecastSearch;
