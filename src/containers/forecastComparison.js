import { connect } from 'react-redux';
import { getCityForecast, removeCityForecast, setSearchInput, setSearchInputError } from '../actions/comparisonForecast';
import ForecastComparison from '../components/forecastComparison';

function mapStateToProps(state) {
  return {
    comparisonForecast: state.comparisonForecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCityForecast: async (city) => {
      dispatch(getCityForecast(city));
    },
    removeCityForecast: (city) => {
      dispatch(removeCityForecast(city));
    },
    setSearchInput: (text) => {
      dispatch(setSearchInput(text));
    },
    setSearchInputError: (error) => {
      dispatch(setSearchInputError(error));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastComparison);
