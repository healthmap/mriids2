import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { fetchEbolaData, fetchEbolaDataCombined } from "./actions/ebola";
import { fetchCovidCaseCounts, fetchCovidDeathCounts } from "./actions/covid";
import SnapshotMap from "./components/SnapshotMap";
import EbolaRiskMap from "./containers/EbolaRiskMap";
import Team from "./components/Team";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import DateRange from "./components/DateRange";
import { StyledAppContainer } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
    this.props.fetchCovidCaseCounts();
    this.props.fetchCovidDeathCounts();
  }

  renderHomePageComponents = () => {
    // When we are displaying the EbolaRiskMap, we want this to display on the entire page.
    if (
      this.props.filters.view === "risk" &&
      this.props.filters.outbreak === "Ebola Outbreak"
    ) {
      return <EbolaRiskMap />;
    } else {
      // If we are not displaying the EbolaRiskMap, we want to display the SnapshotMap, ChartComponent, and DateRange.
      return (
        <>
          <SnapshotMap />
          <ChartComponent />
          <DateRange />
        </>
      );
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <StyledAppContainer>
            <Header />
            <Switch>
              <Route exact path="/">
                <Sidebar />
                {this.renderHomePageComponents()}
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

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEbolaData: () => dispatch(fetchEbolaData()),
  fetchEbolaDataCombined: () => dispatch(fetchEbolaDataCombined()),
  fetchCovidCaseCounts: () => dispatch(fetchCovidCaseCounts()),
  fetchCovidDeathCounts: () => dispatch(fetchCovidDeathCounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
