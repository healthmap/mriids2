import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "./assets/sc-theme";
import theme from "./assets/theme";
import { fetchEbolaData, fetchEbolaDataCombined } from "./actions/ebola";
import {
  fetchCovidCaseCounts,
  fetchCovidDeathCounts,
  fetchCovidProjectionsData,
} from "./actions/covid";
import SnapshotMap from "./components/SnapshotMap";
import EbolaRiskMap from "./components/EbolaRiskMap";
import Team from "./components/Team";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import CovidProjectionsChart from "./components/CovidProjectionsChart";
import ProjectionsPopup from "./components/ProjectionsPopup";
import DateRangePopover from "./components/DateRangePopover";
import DateRange from "./components/DateRange";
import * as Styled from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
    this.props.fetchCovidCaseCounts();
    this.props.fetchCovidDeathCounts();
    this.props.fetchCovidProjectionsData();
  }

  renderDataComponents = () => {
    if (
      this.props.filters.dataType === "risk" &&
      this.props.filters.outbreak === "Ebola Outbreak"
    ) {
      return <EbolaRiskMap />;
    } else if (
      this.props.filters.dataType === "projected deaths" &&
      this.props.filters.outbreak === "COVID 19"
    ) {
      return <CovidProjectionsChart />;
    } else {
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
        <StyledComponentsProvider theme={styledComponentsTheme}>
          <Router>
            <Styled.AppContainer>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Sidebar />
                  <ProjectionsPopup />
                  <DateRangePopover />
                  {this.renderDataComponents()}
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/team">
                  <Team />
                </Route>
              </Switch>
            </Styled.AppContainer>
          </Router>
        </StyledComponentsProvider>
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
  fetchCovidProjectionsData: () => dispatch(fetchCovidProjectionsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
