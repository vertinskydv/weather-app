import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    menuIcon: {
        color: '#fff'
    }
});


const MainHeader = (props) => {
    const { classes } = props;
    return (
        <AppBar position='static'>
            <Toolbar className='header-container'>
                <Typography variant="title" color="inherit">
                    WeatherApp
                </Typography>
                <Typography align='center'>
                    <IconButton>
                        <Menu className={classes.menuIcon} />
                    </IconButton>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(MainHeader);