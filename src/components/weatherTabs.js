import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ThreeDayForecast from '../components/threeDayForecast' 


class WeatherTabs extends React.Component {
    state = {
        value: 0
    };

    render() {
        if (this.props.threeDayWeather) {
            return (
                <React.Fragment>
                    <Tabs value={this.state.value} onChange={this.handleTabChange}>
                        <Tab label="Nearest forecast" />
                        <Tab label="Three-day forecast" />
                        <Tab label="Historical data" />
                    </Tabs>
                    { this.state.value === 1 && <ThreeDayForecast weather = {this.props.threeDayWeather} />}
                </React.Fragment>
            );
        }
        else {
            return ('Please select city');
        }
    }

    handleTabChange = (event, value) => {
        this.setState({value});
    }
};

export default WeatherTabs;