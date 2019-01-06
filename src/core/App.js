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
  Profiles
} from "components";
import { Typography } from "@material-ui/core";
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

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in feugiat massa. Fusce molestie elementum justo quis tincidunt. Vestibulum at lorem sit amet eros ullamcorper lacinia non vel elit. Nullam nisi risus, lobortis vel imperdiet vel, facilisis ut leo. Pellentesque scelerisque turpis in odio dapibus scelerisque. Vestibulum libero mauris, fringilla eu ex sit amet, elementum sodales metus. Duis ut ultrices mi. In mattis imperdiet nunc. Fusce finibus tellus sit amet arcu pretium, et vulputate metus vestibulum. Nam interdum, nisl pulvinar vehicula efficitur, eros ex pulvinar sapien, nec gravida nisl tortor eu odio. Maecenas vulputate nibh ut varius tincidunt. Curabitur dui massa, ultricies nec scelerisque at, imperdiet vel dui. Quisque sodales, diam et ultricies suscipit, erat nisl pharetra nulla, hendrerit pellentesque diam tellus eget lacus. Nunc sit amet tempor nisl. Mauris quam diam, rutrum blandit dapibus a, cursus quis felis. Cras sollicitudin sem nec dui dapibus, at fringilla leo eleifend. Cras a ligula lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam finibus ultrices dolor a accumsan. Pellentesque non ex et lectus egestas gravida ac ac magna. Quisque a pretium ligula. Ut eros mauris, pellentesque non erat eget, feugiat varius sem. Maecenas sit amet lobortis lectus. In tortor turpis, mattis sit amet cursus eget, mattis auctor diam. Vestibulum hendrerit sodales consectetur. Vestibulum varius ante ut placerat mollis. In consequat dolor eget neque gravida accumsan. Mauris vitae sollicitudin odio, at vestibulum mauris. Ut et hendrerit enim. Sed quam ex, ultricies sed porta eget, euismod quis dui. Ut nec neque ac orci consectetur maximus. Pellentesque congue dictum ullamcorper. Nullam ipsum risus, maximus non suscipit molestie, lobortis sit amet velit. Mauris venenatis elementum lectus eu molestie. Integer ullamcorper ipsum quis tincidunt aliquet. Nam varius, risus in iaculis aliquet, elit ex dapibus ex, vehicula convallis augue libero quis lorem. Vivamus et dictum metus, non pharetra purus. Donec maximus dolor in risus aliquet, vestibulum commodo felis volutpat. Cras ultrices sapien eget purus pulvinar pretium. Vivamus malesuada quam et turpis facilisis congue. Integer aliquet aliquam turpis ut varius. Quisque lorem mi, aliquam sit amet ultricies vitae, congue vitae leo. Suspendisse sed imperdiet purus, nec rhoncus massa. Aliquam rutrum porttitor lectus eu rhoncus.";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policyOpen: false,
      introOpen: true,
    };
  }

  handleDialogToggle = (dialog, toggle = !this.state.policyOpen) => {
    this.setState({ [`${dialog}Open`]: toggle });
  };

  render() {
    const modals = (
      <React.Fragment>
        {" "}
        <Intro
          open={this.state.introOpen}
          handleClose={() => this.handleDialogToggle("intro", false)}
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
        </BackPanel>
        <Footer />

        {modals}
      </MuiThemeProvider>
    );
  }
}

export default App;
