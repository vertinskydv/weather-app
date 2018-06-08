import React from 'react';
import Highcharts from 'highcharts';
import moment from 'moment';

class LinearChart extends React.Component {
  chartId = 'three-day-chart';
  constructor(props) {
    super(props);
    this.weather = props.weather;
  }

  shouldComponentUpdate(newState) {
    this.chart.destroy();
    this.weather = newState.weather;
    this.renderChart();
    return false;
  }

  componentDidMount() {
    this.renderChart();
  }

  render() {
    return React.createElement('div', { id: this.chartId });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  renderChart() {
    const categories = [];
    const data = [];
    this.weather.list.forEach((weather) => {
      categories.push(moment.unix(weather.dt).format('D MMM H:mm'));
      data.push(weather.main.temp);
    });
    this.chart = Highcharts.chart(this.chartId, {
      xAxis: {
        categories
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          }
        },
        line: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: this.weather.city.name,
        data,
        borderWidth: 0
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  }
}

export default LinearChart;
