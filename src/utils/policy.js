import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Slide,
  Card,
  CardContent,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PolicyDocument from 'media/Regulamin_IVR_SMS_CHAT.pdf';

const styles = theme => ({
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  document: {
      width: "100%",
      height: `${window.innerHeight - 64}px`
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Policy extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  renderDocument = () => {
    return <embed className={this.props.classes.document} src={PolicyDocument} type="application/pdf" />;
  };

  render() {
    const { classes, open, handleClose } = this.props;
    const document = this.renderDocument();

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Regulamin
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{width: "100%", height: "100%", background: "#525659", overflow: "hidden"}}>
        
        {document}
        </div>
  

      </Dialog>
    );
  }
}

export default withStyles(styles)(Policy);

Policy.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
