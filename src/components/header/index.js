import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import bgVid from "media/background.mp4";

const styles = theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    height: "calc(100vh - 56px)",
    position: "relative",
    backgroundImage: `linear-gradient(to top, #000, ${
      theme.palette.background
    })`,
  },
  bottomBar: {
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${
      theme.palette.primary.main
    })`,
    width: "100%",
    height: "64px",
    position: "absolute",
    bottom: 0,
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
  },
  container: {
    position: "absolute",
    width: "70vw",
    height: "50vh",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center",

    top: "50%",
    left: "50%",
  },
  content: {
    margin: "0 auto",
    textAlign: "center",
    padding: "10vh 0px 10vh 0px",
  },
  //   video: {
  //     position: "absolute",
  //     right: 0,
  //     bottom: 0,
  //     minWidth: "100%",
  //     opacity: 0.4,
  //     zIndex: 0,
  //     height: "calc(100vh - 56px)",
  //   },
  videoContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  video: { minWidth: "100%", minHeight: "100%", opacity: 0.4, zIndex: 0 },
  "@media (min-width: 600px)": {
    root: {
      height: "calc(100vh - 64px)",
    },
    video: {
      //height: "calc(100vh - 64px)",
    },
  },
});

class Header extends Component {
  componentDidMount() {
    this.refs.video.play();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.videoContainer}>
          <video
            ref="video"
            playsinline={true}
            autoplay={true}
            muted={true}
            loop={true}
            className={classes.video}
            id="myVideo">
            <source src={bgVid} type="video/mp4" />
          </video>
        </div>
        <div className={classes.container}>
          <div className={classes.content}>
            <Typography variant="h3" style={{ color: "#fff" }}>
              Spełnimy Twoje najskrytsze fantazje
            </Typography>
            <br />
            <br />
            <Button variant="contained" size="large" color="primary">
              Zapoznaj się
            </Button>
          </div>
        </div>
        <div className={classes.bottomBar} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
