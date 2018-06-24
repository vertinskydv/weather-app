import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: '1 1 auto'
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
        <TextField
          id='name'
          label='City'
          error={Boolean(comparisonForecast.inputError)}
          helperText={comparisonForecast.inputError}
          value={comparisonForecast.inputValue}
          className={classes.textField}
          onChange={(event) => {
            setSearchInput(event.target.value);
            setSearchInputError('');
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter' && comparisonForecast.inputText) {
              event.preventDefault();
              getCityForecast(comparisonForecast.inputText);
            }
          }}
        />
        <Button
          variant='outlined'
          color='primary'
          onClick={() => {
            getCityForecast(comparisonForecast.inputValue);
          }}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ForecastComparisonSearch);
