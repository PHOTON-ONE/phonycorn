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
    background: `linear-gradient(to bottom, ${theme.palette.background} 85%, #E23975)`,
  },
  toolbar: {
      padding: "0px 15vw 0px 15vw"
  },
  grow: {
    flexGrow: 1,
  },
});

function HomeBar(props) {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
          <div className={classes.grow} />
              <IconButton color="inherit">
                  <NewReleasesOutlined />
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomeBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(HomeBar);