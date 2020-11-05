import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEbolaData,
  fetchEbolaDataCombined,
  fetchRiskData,
} from "./actions/ebola";
import Map from "./containers/Map";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import { StyledAppContainer } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
    this.props.fetchRiskData();
  }

  render() {
    return (
      <StyledAppContainer>
        <Header />
        <Sidebar />
        <Map />
        <ChartComponent />
      </StyledAppContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEbolaData: () => dispatch(fetchEbolaData()),
  fetchEbolaDataCombined: () => dispatch(fetchEbolaDataCombined()),
  fetchRiskData: () => dispatch(fetchRiskData()),
});

export default connect(null, mapDispatchToProps)(App);
