import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import LinearChart from './linearChart';
import WeatherTable from './weatherTable';

import CityForecastSearch from '../containers/cityForecastSearch'

const styles = (theme) => ({
    weatherCard: {
        marginTop: 15,
        marginBottom: 25,
        marginLeft: 10,
        marginRight: 10
    },
    forecastViewSelect: {
        marginTop: 10
    }
})

class ForecastView extends React.Component {
    state = {
        value: 'table'
    }

    render() {
        let { classes, searchComponent } = this.props;
        let forecastView = [];
        if (this.props.fiveDayWeather) {
            forecastView.push(
                <Select key='three-day-forecast-select-view' 
                    className={classes.forecastViewSelect}
                    value={this.state.value}
                    onChange={this.handleViewSelectChange}
                >
                    <MenuItem value={'table'}>Table</MenuItem>
                    <MenuItem value={'chart'}>Chart</MenuItem>
                </Select>
            );
            if (this.state.value === 'chart') {
                forecastView.push(<LinearChart key='three-day-forecast-linear' weather = {this.props.fiveDayWeather} />);
            }
            else if (this.state.value === 'table') {
                forecastView.push(<WeatherTable key='three-day-forecast-chart' weather = {this.props.fiveDayWeather} />);
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
        this.setState({value: e.target.value});     
    }
};

export default withStyles(styles)(ForecastView);