import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        fontFamily: "'Pacifico', cursive",
        color: theme.palette.primary.main
    }
});

class Header extends Component {
    render() {
        return (
            <Typography variant={this.props.variant} style={this.props.style} className={this.props.classes.root}>{this.props.children}</Typography>
        );
    }
}

export default withStyles(styles)(Header);

Header.propTypes = {
    variant: PropTypes.string
}

Header.defaultProps = {
    variant: "h3"
}