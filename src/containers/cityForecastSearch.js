import { connect } from 'react-redux';
import CityForecastSearch from '../components/cityForecastSearch';
import { setCity, getForecast } from '../actions/cityForecast';

function mapStateToProps(state) {
  return {
    city: state.cityForecast.city
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    getForecast: async (city) => {
      const setCityResult = await dispatch(getForecast(city));
      return setCityResult;
    },
    inputChangeHandler: (event) => {
      dispatch(setCity(event.target.value));
    }
  };
  return dispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(CityForecastSearch);
