import React from 'react';
import Highcharts from 'highcharts';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import weatherIcons from '../images/weather-animated/weather-sprite.svg';
// import i01d from '../images/weather-animated/01d.svg';
import icon01d from '../images/weather-animated/day.svg';
import icon01n from '../images/weather-animated/night.svg';
import icon02d from '../images/weather-animated/cloudy-day-1.svg';
import icon02n from '../images/weather-animated/cloudy-night-1.svg';
import icon03d from '../images/weather-animated/cloudy-day-3.svg';
import icon03n from '../images/weather-animated/cloudy-night-3.svg';
import icon04d from '../images/weather-animated/cloudy.svg';
import icon04n from '../images/weather-animated/cloudy.svg';
import icon09d from '../images/weather-animated/rainy-5.svg';
import icon09n from '../images/weather-animated/rainy-5.svg';
import icon10d from '../images/weather-animated/rainy-3.svg';
import icon10n from '../images/weather-animated/rainy-5.svg';
import icon11d from '../images/weather-animated/thunder.svg';
import icon11n from '../images/weather-animated/thunder.svg';
import icon13d from '../images/weather-animated/snowy-6.svg';
import icon13n from '../images/weather-animated/snowy-6.svg';
import icon50d from '../images/weather-animated/cloudy.svg';
import icon50n from '../images/weather-animated/cloudy.svg';

const weatherIcons = {
    icon01d,
    icon01n,
    icon02d,
    icon02n,
    icon03d,
    icon03n,
    icon04d,
    icon04n,
    icon09d,
    icon09n,
    icon10d,
    icon10n,
    icon11d,
    icon11n,
    icon13d,
    icon13n,
    icon50d,
    icon50n
}

class WeatherTable extends React.Component {
    chartId = 'three-day-chart';
    constructor(props) {
        super(props);
        this.weather = props.weather;
    }

    shouldComponentUpdate(newState) {
        this.weather = newState.weather;
        return true;
    }

    render() {
        return (
            <Table>
                <TableBody>
                {
                    this.weather.list.map(element => {
                        let windDirrection;
                        return (
                            <TableRow key={element.dt}>
                                <TableCell>{moment.unix(element.dt).format('D MMM H:mm')}</TableCell>
                                <TableCell>
                                    <img src={weatherIcons['icon' + element.weather[0].icon]}/>
                                </TableCell>
                                <TableCell>{Math.round(element.main.temp)}°C</TableCell>
                            </TableRow>
                        )
                    })
                }
                </TableBody>
            </Table>
        )
    }
};

export default WeatherTable;