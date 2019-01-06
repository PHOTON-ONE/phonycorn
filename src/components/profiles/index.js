import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grow, withStyles, Grid } from "@material-ui/core";

import Profile from "./profile";

import Profile01 from 'media/profiles/1.png';
import Profile02 from 'media/profiles/2.png';
import Profile03 from 'media/profiles/3.png';
import Profile04 from 'media/profiles/4.png';
import Profile05 from 'media/profiles/5.png';

const styles = theme => ({
  root: {},
  container: {
    display: "flex",
  },
});

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: window.profiles || [],
      scrollY: window.scrollY,
    };
  }

  componentDidMount() {
      console.log(window.profiles);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ scrollY: window.scrollY });
  };

  createProfile(profile) {
    const profiles = this.state.profiles;
    profiles.push(profile);
    this.setState({ profiles });
  }

  getProfiles() {
    return this.state.profiles;
  }

  render() {
    const { classes } = this.props;

    const childs = this.getProfiles().map((e, i) => {
        const placeholder = <Grid item xs={0} lg={3} spacing={12} />;
      return (
        <React.Fragment>
          {i%2 !== 0 ? placeholder : <React.Fragment/>}
          <Grid item xs={12} lg={9} spacing={12}>
            <Profile data={e} />
          </Grid>
          {i%2 === 0 ? placeholder : <React.Fragment/>}
        </React.Fragment>
      );
    });

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>{childs}</Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profiles);
