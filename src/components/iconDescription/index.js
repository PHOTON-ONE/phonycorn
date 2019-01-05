import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Paper, Typography } from "@material-ui/core";
import ShieldIcon from '@material-ui/icons/Security';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  element: {
    width: "100%",
    height: "auto",
    textAlign: "center",
  },
  paper: {
      padding: "20px 24px 20px 24px"
  },
  icon: {
    "background":`linear-gradient(to right top, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,"WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"
  }
});

class IconDescription extends Component {
  render() {
    const { classes } = this.props;

    const elements = [
        {
          title: "Niezapomniane chwile",
          icon: <FavoriteIcon style={{fontSize: "48px"}} className={classes.icon} />,
          text: "Ogromne erotyczne spełnienie bez wychodzenia z domu! Jesteśmy dostępni przez całą dobę specjalnie dla Ciebie!"
        },
        {
          title: "Pełna anonimowość",
          icon: <ShieldIcon style={{fontSize: "48px"}} className={classes.icon} />,
          text: "Nie musisz obawiać się, że ktoś się dowie o tym, że z nami rozmawiałeś! Nasze usługi są bezpiecznym sposobem na rozładowanie napięcia seksualnego."
        },
        {
          title: "Wysoka jakość usług",
          icon: <StarIcon style={{fontSize: "48px"}} className={classes.icon} />,
          text: "Gwarantujemy ogromną satysfakcję z prowadzonej z nami rozmowy. Zadzwoń i się przekonaj, a na pewno Cię nie zawiedziemy!"
        },
      ];

    return (
      <div className={classes.root}>
          <Paper elevation={1} className={classes.paper}>
        <Grid container justify="center" spacing={Number(16)}>
            {elements.map((e, i) => {
              return (
                <Grid key={e.title + i} item xs={12} sm={4}>
                  <div className={classes.element}>
                    {e.icon}
                    <br/>
                    <br/>
                    <Typography variant="h4">
                        {e.title}
                    </Typography>
                    <Typography variant="p">
                        {e.text}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
        </Grid>
          </Paper>
      </div>
    );
  }
}

IconDescription.propTypes = {};

export default withStyles(styles)(IconDescription);
