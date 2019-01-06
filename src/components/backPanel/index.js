import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Paper } from "@material-ui/core";

const styles = {
  root: {
    marginTop: "-3vh",
    width: "97vw",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "5% 0px 5% 0px",
    maxWidth: "1280px",
    background: "#fff",
    position: "relative",
    minHeight: "300vh"
  },
  content: {
      padding: "5vh 5% 5vh 5%"
  }
};

class BackPanel extends Component {

    state = {
        scrollY: window.scrollY,
        borderRadius: "2.5rem"
    }

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = (e) => {
        this.setState({scrollY: window.scrollY});

        if(window.scrollY >= 254) {
           
        }
    }

    createParallax = (scrollY) => {
        return -(scrollY / 4) - 32;
    }

  render() {
    const { classes, children } = this.props;

    return <Paper elevation={2} className={classes.root} style={{marginTop: `${this.createParallax(this.state.scrollY)}px`, borderRadius: this.state.borderRadius}}><div className={classes.content}>{children}</div></Paper>;
  }
}

BackPanel.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(styles)(BackPanel);
