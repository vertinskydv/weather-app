import HistoryForecastSearch from '../components/historyForecastSearch';
import { setSearchline, getFiveDayWeatherData } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return {
        historySearchline: state.historySearchline
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryForecastSearch)