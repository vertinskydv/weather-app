import { setSearchline, getFiveDayWeatherData } from '../actions'
import { connect } from 'react-redux';
import CityForecast from '../components/cityForecast';
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

export default connect(mapStateToProps, mapDispatchToProps)(CityForecast)