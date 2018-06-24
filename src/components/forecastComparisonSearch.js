import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    position: 'relative'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: '1 1 auto'
  },
  loadingSpinner: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

class ForecastComparisonSearch extends React.Component {
  render() {
    const {
      classes,
      comparisonForecast,
      getCityForecast,
      setSearchInput,
      setSearchInputError
    } = this.props;
    return (
      <form noValidate className={classes.container} autoComplete='off'>
        <FormControl className={classes.textField}>
          <InputLabel htmlFor='city-forecast-searchline'>City</InputLabel>
          <Input
            id='city-forecast-searchline'
            type='text'
            value={comparisonForecast.inputValue}
            error={Boolean(comparisonForecast.inputError)}
            onChange = {(event) => {
              setSearchInput(event.target.value);
              setSearchInputError('');
            }}
            onKeyPress = {(event) => {
              if (event.key === 'Enter' && comparisonForecast.inputText) {
                event.preventDefault();
                getCityForecast(comparisonForecast.inputText);
              }
            }}
          />
          <FormHelperText
            error={Boolean(comparisonForecast.inputError)}>{comparisonForecast.inputError}
          </FormHelperText>
        </FormControl>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => {
            getCityForecast(comparisonForecast.inputValue);
          }}
        >
          Add
        </Button>
        {comparisonForecast.loading && <LinearProgress className={classes.loadingSpinner} />}
      </form>
    );
  }
}

export default withStyles(styles)(ForecastComparisonSearch);
