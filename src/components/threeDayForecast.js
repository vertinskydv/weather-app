import React from 'react';
import Highcharts from 'highcharts';
import moment from 'moment'

class ThreeDayForecast extends React.Component {
    chartId = 'three-day-chart';

    
    constructor(props) {
        super(props);
        this.weather = props.weather;
    }

    componentDidMount() {
        const categories = [];
        const data = [];
        this.weather.list.forEach((weather) => {
            categories.push(moment(weather.dt_txt));
            data.push(weather.main.temp);
        });
        debugger;
        Highcharts.chart(this.chartId, {
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: data
            }]
        });
    }

    render() {
        return React.createElement('div', { id: this.chartId });
    }
};

export default ThreeDayForecast;