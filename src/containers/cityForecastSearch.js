import CityForecastSearch from '../components/cityForecastSearch';
import { setSearchline, getFiveDayWeatherData } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return {
        forecastCity: state.forecastCity
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setSearchline: (city) => {
            dispatch(setSearchline(city));
        },
        getFiveDayWeatherData: (city) => {
            dispatch(getFiveDayWeatherData(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityForecastSearch)