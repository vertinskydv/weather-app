import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import LinearChart from './linearChart';
import WeatherTable from './weatherTable';

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

class ForecastView extends React.Component {
  state = {
    value: 'table'
  }

  render() {
    const { classes, searchComponent, forecast } = this.props;
    const forecastView = [];
    if (forecast) {
      forecastView.push(<Select
          key='three-day-forecast-select-view'
          className={classes.forecastViewSelect}
          value={this.state.value}
          onChange={this.handleViewSelectChange}
        >
          <MenuItem value={'table'}>Table</MenuItem>
          <MenuItem value={'chart'}>Chart</MenuItem>
        </Select>);
      if (this.state.value === 'chart') {
        forecastView.push(<LinearChart key='three-day-forecast-linear' weather = {forecast} />);
      } else if (this.state.value === 'table') {
        forecastView.push(<WeatherTable key='three-day-forecast-chart' weather = {forecast} />);
      }
    }

    return (
      <Fragment>
        <Card className={classes.weatherCard}>
          <CardContent>
            {searchComponent}
            {forecastView}
          </ CardContent>
        </ Card>
      </Fragment>
    );
  }

  handleViewSelectChange = (e) => {
    this.setState({ value: e.target.value });
  }
}

export default withStyles(styles)(ForecastView);
