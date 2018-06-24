import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import ForecastComparisonSearch from './forecastComparisonSearch';
import ComparisonTable from './comparisonTable';

const styles = () => ({
  weatherCard: {
    marginTop: 15,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10
  },
  forecastViewSelect: {
    marginTop: 10
  }
});

class ForecastComparison extends React.Component {
  render() {
    const {
      classes,
      getCityForecast,
      removeCityForecast,
      comparisonForecast,
      setSearchInput,
      setSearchInputError
    } = this.props;

    return (
        <Card className={classes.weatherCard}>
            <CardContent>
                <ForecastComparisonSearch
                  comparisonForecast={comparisonForecast}
                  setSearchInput={setSearchInput}
                  getCityForecast={getCityForecast}
                  setSearchInputError={setSearchInputError}
                />
                <ComparisonTable
                  comparisonForecast={comparisonForecast}
                  removeCityForecast={removeCityForecast}
                />
            </ CardContent>
        </ Card>
    );
  }

  handleViewSelectChange = (e) => {
    this.setState({ value: e.target.value });
  }
}

export default withStyles(styles)(ForecastComparison);
