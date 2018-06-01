import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const styles = () => ({
    menuIcon: {
        color: '#fff'
    },
    menuLink: {
        color: '#000',
        textDecoration: 'none'
    }
});


class MainHeader extends React.Component {
    state = {
        menuOpen: null
    }

    handleClick = event => {
        this.setState({ menuOpen: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ menuOpen: null });
    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position='static'>
                <Toolbar className='header-container'>
                    <Typography variant="title" color="inherit">
                        WeatherApp
                    </Typography>
                    <Typography align='center'>
                        <IconButton onClick={this.handleClick}>
                            <MenuIcon className={classes.menuIcon}></MenuIcon>
                        </IconButton>
                        <Menu open={Boolean(this.state.menuOpen)} anchorEl={this.state.menuOpen} onClose={this.handleClose}>
                            <MenuItem onClick={this.handleClose}><Link className={classes.menuLink} to='/forecast'>5 day forecast</Link></MenuItem>
                            <MenuItem onClick={this.handleClose}><Link className={classes.menuLink} to='/forecast-comparison'>Forecast comparison</Link></MenuItem>
                        </Menu>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(MainHeader);