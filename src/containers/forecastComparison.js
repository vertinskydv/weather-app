import { connect } from 'react-redux';
import { addCity, removeCity } from '../actions/comparisonForecast';
import ForecastComparison from '../components/forecastComparison';

function mapStateToProps(state) {
  return {
    comparisonForecast: state.comparisonForecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: async (city) => {
      const addCityResult = await dispatch(addCity(city));
      return addCityResult;
    },
    removeCity: (city) => {
      dispatch(removeCity(city));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastComparison);
