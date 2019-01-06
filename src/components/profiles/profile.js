import React, { Component } from "react";

import { withStyles, CardContent, Card, Typography } from "@material-ui/core";

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
});

class Profile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card elevation={2} className={classes.card}>
          <div className={classes.imgContainer} style={{backgroundImage: `url(${this.props.data.photo})`}} />
          <CardContent>
            <div className={classes.content}>
                <Typography variant="h5">
                    {this.props.data.name.first} {this.props.data.name.middle} {this.props.data.name.last}
                </Typography>
                <Typography variant="p">
                    Lat {this.props.data.age}
                </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
