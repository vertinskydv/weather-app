import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      flex: '1 1 auto'
    }
});

class ForecastComparisonSearch extends React.Component {
    state = {
        city: ''
    };
    
    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    render() {
        const {classes, addCity} = this.props;
        return (
            <form noValidate className={classes.container} autoComplete="off">
                <TextField
                    id="name"
                    label="City"
                    value={this.state.city}
                    className={classes.textField}
                    onChange={(event) => {
                        this.setState({city: event.target.value});
                    }}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        addCity(this.state.city.toLowerCase());
                        this.setState({city: ""});
                    }}
                >
                    Add
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(ForecastComparisonSearch);