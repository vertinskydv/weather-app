import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
});

class HistoryForecastSearch extends React.Component {
    state = {
        selectedDate: new Date()
    };
    
    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    render() {
        const {classes ,forecastCity, getFiveDayWeatherData, setSearchline } = this.props;
        return (
            <form noValidate className={classes.container} autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    margin="normal"
                />
                <TextField
                    type="date"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                />
            </form>
        )
    }
}

export default withStyles(styles)(HistoryForecastSearch);