import { connect } from 'react-redux';
import HistoryForecastSearch from '../components/historyForecastSearch';
import { setCity, setDate, getForecast } from '../actions/historyForecast';

function mapStateToProps(state) {
  return {
    city: state.historyForecast.city,
    date: state.historyForecast.date
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCity: (city) => {
      dispatch(setCity(city));
    },
    setDate: (date) => {
      dispatch(setDate(date));
    },
    getForecast: (city, date) => {
      dispatch(getForecast(city, date));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryForecastSearch);
