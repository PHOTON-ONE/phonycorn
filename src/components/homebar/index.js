import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import {NewReleasesOutlined} from '@material-ui/icons';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
    background: "linear-gradient(to top, #3b262d 92%, #B01950 8%)"
  },
  toolbar: {
    padding: "0px 15vw 0px 15vw",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    fontFamily: "'Pacifico', cursive",
    color: theme.palette.primary.light,
    fontSize: "1.8rem",
  }
});

function HomeBar(props) {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logo}><u>{title}</u></Typography>
          <div className={classes.grow} />
              <IconButton color="inherit" onClick={() => props.handlePolicyOpen()}>
                  <NewReleasesOutlined />
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomeBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handlePolicyOpen: PropTypes.func
};

export default withStyles(styles)(HomeBar);