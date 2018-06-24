import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  form: {
    position: 'relative'
  },
  loadingSpinner: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

class CityForecastSearch extends React.Component {
  render() {
    const {
      classes,
      city,
      loading,
      inputError,
      searchHandler,
      inputChangeHandler,
      inputKeydownHandler
    } = this.props;
    return (
      <FormControl className={classes.form} fullWidth>
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
        {loading && <LinearProgress className={classes.loadingSpinner} />}
      </FormControl>
    );
  }
}

export default withStyles(styles)(CityForecastSearch);
