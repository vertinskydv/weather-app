import CityForecastSearch from '../components/cityForecastSearch';
import { setCity, getForecast } from '../actions/cityForecast';
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return {
        city: state.cityForecast.city
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setCity: (city) => {
            dispatch(setCity(city));
        },
        getForecast: async (city) => {
            const setCityResult = await dispatch(getForecast(city));
            return setCityResult;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityForecastSearch)