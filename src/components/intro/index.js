import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Button, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    height: "70vh",
    background: "#fff",
    zIndex: 999,
    borderRadius: "5rem",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    
  },
  blur: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 998,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: theme.palette.primary.main,
    opacity: 0.3,
    filter: "blur(300px)",
  },
  background: {
    background: "#212121",
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 998,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d81b60' fill-opacity='0.10'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },
  content: {
    padding: "3rem",
    marginLeft: "30%",
    maxWidth: "70%",
  },
  imgContainer: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80")',
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
});

class Intro extends Component {
  render() {
    const { classes, open, handleClose } = this.props;

    if (!open) return <React.Fragment />;

    return (
      <div className={classes.background}>
        <div className={classes.root}>
          <div className={classes.imgContainer} />

          <div className={classes.content}>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae pulvinar est. Maecenas tempus ullamcorper hendrerit.
              Phasellus nec mollis urna. Phasellus vulputate nulla in mi gravida
              maximus. Integer tincidunt eros eget purus lacinia, ac dictum arcu
              luctus. Phasellus lacinia sodales est ac ultricies. Maecenas
              lacinia vulputate neque. Praesent quis quam sit amet risus
              placerat efficitur. Praesent id nisl fermentum neque pulvinar
              elementum non eu sapien. Aliquam eget dictum ex, a ultricies ante.
              Quisque sem ipsum, vehicula vel maximus quis, volutpat eu nulla.
              Donec nisi neque, placerat quis mattis at, condimentum sed ipsum.
              Duis lacus est, rhoncus nec mi at, auctor auctor ligula. Etiam
              dignissim eros sit amet eros ullamcorper molestie. Sed non nibh
              vel mauris facilisis malesuada dapibus nec elit. Curabitur in
              sollicitudin augue. Suspendisse volutpat finibus enim ac suscipit.
              Cras convallis velit sem, et volutpat nisi tincidunt rutrum.
              Vivamus id ante convallis magna commodo vehicula non vel magna.
              Vivamus nisl eros, blandit vestibulum lorem at, ultricies lobortis
              sem. Quisque lacinia eu ex ut rhoncus. Vestibulum a dui vel risus
              sagittis pellentesque. Aenean ac volutpat mauris.
            </Typography>
            <br/>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={handleClose}>
              Wejdź
            </Button>
          </div>
        </div>
        <div className={classes.blur} />
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
