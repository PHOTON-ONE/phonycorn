import React, { Component } from 'react';
import {withStyles, Paper, Grid, Typography} from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import pink from '@material-ui/core/colors/pink';

const styles = theme=> ({
    root: {
        width: "100%",
        height: "auto",
        background: "rgba(222, 222, 222, .08)",
        borderRadius: "30px",
    },
    container: {
        padding: "3rem"
    },
    icon: {
        fontSize: "10rem",
        textAlign: "center",

    },
    iconContainer: {
        position: "relative",
        display: "inline-block",
        left: "50%",
        transform: "translateX(-50%)",
        color: pink[600],

    },
    numberSlogan: {
        opacity: ".7",
        fontSize: "1rem",
        textAlign: "right",
        "&:hover": {
          opacity: "1"
        }
    },
    tel: {
        color: theme.palette.primary.main,
        textAlign: "left",
        fontSize: "1.5rem",

      },



});

class CallInfo extends Component {
    render() {
        const {classes} = this.props;
        console.log(classes);
        return (
            <Paper className={classes.root}>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                        <div className={classes.iconContainer}>
                        <SmsIcon className={classes.icon}/>
                        </div>
                        </Grid>
                        
                        <Grid item xs={12} md={9}>
                        <br /><br />
                            <Typography variant="p">Nie możesz aktualnie rozmawiać? Nic straconego! Nasze gorące kobiety również czekają na Ciebie całodobowo na seks-linii SMS. Po prostu napisz i doświadcz niezapomnianej, erotycznej przyjemności w dowolnym momencie!</Typography>
                            <br />
                            <Typography variant="p" className={classes.tel}>+48 123 456 789
                  </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(CallInfo);