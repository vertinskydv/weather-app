import { connect } from 'react-redux';
import ForecastView from '../components/forecastView';

function mapStateToProps(state) {
  return {
    forecast: state.historyForecast.forecast
  };
}

export default connect(mapStateToProps)(ForecastView);
