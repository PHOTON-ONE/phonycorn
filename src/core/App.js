import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, pink } from "@material-ui/core/colors";
import {
  HomeBar,
  Header,
  BackPanel,
  Footer,
  IconDescription,
  Intro,
  Profiles,
  CallInfo
} from "components";
import HeaderX from "utils/header";
import Policy from "utils/policy";

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[600], light: pink[300], dark: pink[800] }, // Purple and green play nicely together.
    secondary: { main: grey[100] }, // This is just green.A700 as hex.
    background: "#3b262d",
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policyOpen: false,
      introOpen: false,
    };

    this.needIntro = true;
  }

  componentWillMount() {
    this.handleVisit();
  }

  componentDidMount() {
    if(this.needIntro)
      this.setState({introOpen: true});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.introOpen !== this.state.introOpen) 
      this.toggleOverflow(this.state.introOpen);
  }

  handleVisit = () => {
    const hasVisited = localStorage.getItem('visited');

    this.needIntro = !hasVisited;
    localStorage.setItem("visited", true);
  }

  handleDialogToggle = (dialog, toggle = !this.state.policyOpen) => {
    this.setState({ [`${dialog}Open`]: toggle });
  };

  toggleOverflow = (toggle) => {
    if(!toggle) 
      document.body.style.overflowY = "auto";
     else 
      document.body.style.overflowY = "hidden";
     
  }

  render() {
    const modals = (
      <React.Fragment>
        <Intro
          open={this.state.introOpen}
          handleClose={() => this.handleDialogToggle("intro", false)}
          handlePolicyOpen={() => this.handleDialogToggle("policy", true)}
        />
        <Policy
          open={this.state.policyOpen}
          handleClose={() => this.handleDialogToggle("policy", false)}
        />
      </React.Fragment>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <HomeBar
          handlePolicyOpen={() => this.handleDialogToggle("policy", true)}
          title="Sexus.eu"
        />
        <Header />
        <BackPanel>
          <HeaderX>
            <u>Witaj, zapoznajmy się...</u>
          </HeaderX>
          <IconDescription />
            <HeaderX>
              Przywitaj dziewczynki
            </HeaderX>
              <br/>
              <br/>
            <Profiles />
            <br/>
            <br/>
            <CallInfo />
        </BackPanel>
        <Footer />

        {modals}
      </MuiThemeProvider>
    );
  }
}

export default App;
