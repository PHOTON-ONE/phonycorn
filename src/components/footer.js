import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

const styles = themes => ({
    root: {
        width: "100vw",
        maxWidth: "100%",
        height: "64px",
        lineHeight: "64px",
        backgroundColor: grey[900],
        color: "#fff",
        bottom: 0,
        marginTop: "5vh"
    },
    content: {
        padding: "0 10vw 0 10vw"
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}><div className={classes.content}>Copyright (c) 2018 sexus.eu</div></div>
        );
    }
}

export default withStyles(styles)(Footer);