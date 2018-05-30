import { setCity, getForecast } from '../actions/cityForecast'
import { connect } from 'react-redux';
import ForecastView from '../components/forecastView';
function mapStateToProps (state) {
    return {
        forecast: state.cityForecast.forecast
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setCity: (city) => {
            dispatch(setCity(city));
        },
        getForecast: (city) => {
            dispatch(getForecast(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastView);