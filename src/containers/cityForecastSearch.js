import { connect } from 'react-redux';
import CityForecastSearch from '../components/cityForecastSearch';
import { setCity, getForecast, setInputError } from '../actions/cityForecast';

function mapStateToProps(state) {
  return {
    city: state.cityForecast.city,
    inputError: state.cityForecast.inputError
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    searchHandler: async (city) => {
      dispatch(getForecast(city));
    },
    inputChangeHandler: (event) => {
      dispatch(setCity(event.target.value));
      dispatch(setInputError(''));
    },
    inputKeydownHandler: (event, city) => {
      if (event.key === 'Enter' && city) {
        dispatch(getForecast(city));
      }
    }
  };
  return dispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(CityForecastSearch);
