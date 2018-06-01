import { addCity, removeCity } from '../actions/comparisonForecast'
import { connect } from 'react-redux';
import ForecastComparison from '../components/forecastComparison';
function mapStateToProps (state) {
    return {
        comparisonForecast: state.comparisonForecast
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addCity: (city) => {
            dispatch(addCity(city));
        },
        removeCity: (city) => {
            dispatch(removeCity(city));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastComparison);