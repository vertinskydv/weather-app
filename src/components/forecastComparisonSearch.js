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
  state = {
    city: '',
    error: ''
  };

  render() {
    const { classes, addCity, comparisonForecast } = this.props;
    return (
      <form noValidate className={classes.container} autoComplete='off'>
        <TextField
          id='name'
          label='City'
          error={Boolean(this.state.error)}
          helperText={this.state.error}
          value={this.state.city}
          className={classes.textField}
          onChange={(event) => {
            this.setState({ city: event.target.value });
          }}
          onFocus={() => {
            this.setState({ error: '' });
          }}
        />
        <Button
          variant='outlined'
          color='primary'
          onClick={async () => {
            const addCityResult = await addCity(this.state.city.toLowerCase());
            if (!addCityResult.valid) {
              this.setState({ error: addCityResult.error });
            } else if (comparisonForecast[this.state.city.toLowerCase()]) {
              this.setState({ error: 'City already added' });
            } else {
              this.setState({ city: '' });
            }
          }}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ForecastComparisonSearch);
