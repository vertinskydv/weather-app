import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import { DatePicker } from 'material-ui-pickers';
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
      flex: '1 1 auto'
    },
    dateField: {
        marginTop: 16,
        marginBottom: 8
    },
    searchButton: {
        marginTop: 18,

    }
});

class HistoryForecastSearch extends React.Component {
    state = {
        selectedDate: new Date()
    };
    
    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    render() {
        const {classes, city, date, setCity, setDate, getForecast } = this.props;
        return (
            <form noValidate className={classes.container} autoComplete="off">
                <TextField
                    id="name"
                    label="City"
                    margin="normal"
                    className={classes.textField}
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                />
                <DatePicker
                    label="Date"
                    format="D MMMM YYYY"
                    value={date}
                    onChange={(date) => {
                        setDate(date);
                    }}
                    className={classes.dateField + ' ' + classes.textField}
                />
                <IconButton
                    color="primary"
                    className={classes.searchButton}
                    onClick={() => {
                        getForecast(city, date);
                    }}
                    >
                    <Search />
                </IconButton>
            </form>
        )
    }
}

export default withStyles(styles)(HistoryForecastSearch);