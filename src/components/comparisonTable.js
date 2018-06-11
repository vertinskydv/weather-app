import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { formatToComparisonTable } from '../helpers/dataStructure';
import weatherIcons from '../helpers/wearherIcons';

const styles = () => ({
  cellAlign: {
    verticalAlign: 'middle'
  }
});

class ComparisonTable extends React.Component {
  render() {
    const { comparisonForecast, removeCity, classes } = this.props;
    if (Object.keys(comparisonForecast).length) {
      const comparisonForecastFormatted = formatToComparisonTable(comparisonForecast);
      const body = [];
      const cities = Object.keys(comparisonForecastFormatted);
      const forecasts = Object.values(comparisonForecastFormatted);

      const headerCells = cities.map(city => (
        <TableCell key={`${city}-header`}><Typography variant='subheading' gutterBottom>
          {city}
        </Typography></TableCell>
      ));


      body.push(<TableRow>
        <TableCell></TableCell>
        {cities.map(city => (
          <TableCell>
            <IconButton
              data-city={city}
              className={classes.button}
              aria-label='Delete'
              onClick={(event) => {
                removeCity(event.currentTarget.dataset.city.toLowerCase());
              }}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        ))}
      </TableRow>);

      body.push(Object.keys(forecasts[0]).map(time => (
        <TableRow>
          <TableCell>{moment.unix(time).format('D MMM H:mm')}</TableCell>
          {
            cities.map((city) => {
              const cityWeather = comparisonForecastFormatted[city][time];
              return (<TableCell>
                <span className={classes.cellAlign}>{Math.round(cityWeather.main.temp)}°C</span>
                <img
                  className={classes.cellAlign}
                  src={weatherIcons[`icon${cityWeather.weather[0].icon}`]} alt={cityWeather.weather[0].description}
                />
              </TableCell>);
            })
          }
        </TableRow>
      )));

      return (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {headerCells}
            </TableRow>
          </TableHead>
          <TableBody>
            {body}
          </TableBody>
        </Table>
      );
    }
    return '';
  }
}


export default withStyles(styles)(ComparisonTable);
