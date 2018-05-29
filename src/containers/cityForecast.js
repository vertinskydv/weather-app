import { setSearchline, getFiveDayWeatherData } from '../actions'
import { connect } from 'react-redux';
import ForecastView from '../components/forecastView';
function mapStateToProps (state) {
    return {
        fiveDayWeather: state.fiveDayWeather
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

export default connect(mapStateToProps, mapDispatchToProps)(ForecastView);