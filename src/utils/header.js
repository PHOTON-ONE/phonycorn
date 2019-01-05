import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        fontFamily: "'Pacifico', cursive",
        color: theme.palette.primary.main
    }
});

class Header extends Component {
    render() {
        return (
            <Typography variant="h3" className={this.props.classes.root}>{this.props.children}</Typography>
        );
    }
}

export default withStyles(styles)(Header);