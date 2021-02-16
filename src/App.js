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
import { closeDateRangeModal } from "./actions/ui";
import SnapshotMap from "./components/SnapshotMap";
import EbolaRiskMap from "./containers/EbolaRiskMap";
import Team from "./components/Team";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import SidebarDateRange from "./components/SidebarDateRange";
import DateRange from "./components/DateRange";
import Popover from "@material-ui/core/Popover";
import DialogContent from "@material-ui/core/DialogContent";
import { StyledAppContainer } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
    this.props.fetchCovidCaseCounts();
    this.props.fetchCovidDeathCounts();
    this.props.fetchCovidProjectionsData();
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
        <StyledComponentsProvider theme={styledComponentsTheme}>
          <Router>
            <StyledAppContainer>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Sidebar />
                  <div>
                    <Popover
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      aria-labelledby="date-range-picker-modal"
                      aria-describedby="date-range-picker-modal"
                      open={this.props.isDateRangeModalOpen}
                      onClose={() => this.props.closeDateRangeModal()}
                      children={
                        <DialogContent>
                          <SidebarDateRange />
                        </DialogContent>
                      }
                    />
                  </div>
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
        </StyledComponentsProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  isDateRangeModalOpen: state.ui.isDateRangeModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEbolaData: () => dispatch(fetchEbolaData()),
  fetchEbolaDataCombined: () => dispatch(fetchEbolaDataCombined()),
  fetchCovidCaseCounts: () => dispatch(fetchCovidCaseCounts()),
  fetchCovidDeathCounts: () => dispatch(fetchCovidDeathCounts()),
  fetchCovidProjectionsData: () => dispatch(fetchCovidProjectionsData()),
  closeDateRangeModal: () => dispatch(closeDateRangeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
