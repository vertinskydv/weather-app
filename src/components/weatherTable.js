import React from 'react';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import weatherIcons from '../helpers/wearherIcons';

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
                        return (
                            <TableRow key={element.dt}>
                                <TableCell>{moment.unix(element.dt).format('D MMM H:mm')}</TableCell>
                                <TableCell>
                                    <img src={weatherIcons['icon' + element.weather[0].icon]} alt={element.weather[0].description}/>
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