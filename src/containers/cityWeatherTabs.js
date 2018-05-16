import WeatherTabs from '../components/weatherTabs'
import { connect } from 'react-redux'

function mapStateToProps (state) {
    return {
        threeDayWeather: state.threeDayWeather
    }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         setSearchline: (city) => {
//             dispatch(setSearchline(city));
//         },
//         getThreeDayWeatherData: (city) => {
//             dispatch(getThreeDayWeatherData(city))
//         }
//     }
// }

export default connect(mapStateToProps)(WeatherTabs)