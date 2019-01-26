import React, { Component } from "react";

import {
  withStyles,
  CardContent,
  Card,
  Typography,
  Button,
  Icon,
  Grid,
} from "@material-ui/core";

const styles = theme => ({
  root: {
    margin: "4%",
  },
  card: {
    padding: "2.5%",
    overflow: "hidden",
    position: "relative",
    minHeight: "200px",
  },
  imgContainer: {
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "30%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    padding: "1rem",
    marginLeft: "30%",
    maxWidth: "70%",
  },
  ageSloga: {
    opacity: ".5",
  },
  numberSlogan: {
    opacity: ".7",
    fontSize: "1rem",
    textAlign: "right",
    "&:hover": {
      opacity: "1"
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  saleRegularPrice: {
    color: theme.palette.secondary,
    textAlign: "right"
  },
  regularPrice: {
    color: theme.palette.primary.main,
    textAlign: "right"
  },
  salePrice: {
    color: theme.palette.primary.main,
    textAlign: "right"
  },
  rightText: {
    textAlign: "right"
  }
});

class Profile extends Component {
  renderPrice() {
    const { data: profile, classes } = this.props;

    if (!profile.cost) return <React.Fragment />;

    if(profile.cost.sale && !profile.cost.regular) return <React.Fragment />;

    const bruttoText = (
      <Typography className={classes.rightText} variant="p">Cena brutto za minutę połączenia</Typography>
    );


    if (profile.cost.sale) {
      return (
        <React.Fragment>
            <Typography variant="h2" className={classes.salePrice}>
              {profile.cost.sale}
            </Typography>
            <Typography variant="h4" className={classes.saleRegularPrice}>
              <s>{profile.cost.regular}</s>
            </Typography>
            {bruttoText}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Typography variant="h2" className={classes.regularPrice}>
          {profile.cost.regular}
        </Typography>
        {bruttoText}
      </React.Fragment>
    );
  }
  render() {
    const { classes } = this.props;

    const profile = this.props.data;

    return (
      <div className={classes.root}>
        <Card elevation={2} className={classes.card}>
          <div
            className={classes.imgContainer}
            style={{ backgroundImage: `url(${profile.photo})` }}
          />
          <CardContent>
            <div className={classes.content}>
              <Typography variant="h5">
                {profile.name.first} {profile.name.middle} {profile.name.last}
              </Typography>
              <Typography variant="p" className={classes.ageSloga}>
                Lat {profile.age}
              </Typography>

              <br />

              <Typography variant="p">{profile.description}</Typography>

              <br />
              <br />

              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} xl={6}>
                  {this.renderPrice()}
                </Grid>
                <Grid item xs={12} xl={6} alignItems="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ float: "right" }}>
                    <Icon className={classes.leftIcon}>phone</Icon>
                    Zadzwoń
                  </Button>
                  <div style={{ clear: "both" }} />
                  <br />
                  <Typography variant="p" className={classes.numberSlogan}>
                    {profile.phone}
                  </Typography>
                  {profile.internal ? <Typography variant="p" className={classes.numberSlogan}>
                    numer wewnętrzny <span className={classes.salePrice}>{profile.internal}</span>
                  </Typography> : null}
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
