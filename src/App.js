import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import {
  fetchEbolaData,
  fetchEbolaDataCombined,
  fetchRiskData,
} from "./actions/ebola";
import Map from "./containers/Map";
import Team from "./components/Team";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import DateRangeSlider from "./components/DateRangeSlider";
import { StyledAppContainer } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
    this.props.fetchRiskData();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <StyledAppContainer>
            <Header />
            <Switch>
              <Route exact path="/">
                <Sidebar />
                <Map />
                <ChartComponent />
                <DateRangeSlider />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
            </Switch>
          </StyledAppContainer>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEbolaData: () => dispatch(fetchEbolaData()),
  fetchEbolaDataCombined: () => dispatch(fetchEbolaDataCombined()),
  fetchRiskData: () => dispatch(fetchRiskData()),
});

export default connect(null, mapDispatchToProps)(App);
