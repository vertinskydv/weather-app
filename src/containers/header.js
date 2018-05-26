import { setSearchline, getFiveDayWeatherData } from '../actions'
import { connect } from 'react-redux';
import MainHeader from '../components/mainHeader';
function mapStateToProps (state) {
    return {
        searchline: state.searchline
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

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)