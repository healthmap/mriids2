import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEbolaData, fetchEbolaDataCombined } from "./actions/ebola";
import Map from "./containers/Map";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { StyledAppContainer } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchEbolaData();
    this.props.fetchEbolaDataCombined();
  }

  render() {
    return (
      <StyledAppContainer>
        <Header />
        <Sidebar />
        <Map />
      </StyledAppContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEbolaData: () => dispatch(fetchEbolaData()),
  fetchEbolaDataCombined: () => dispatch(fetchEbolaDataCombined()),
});

export default connect(null, mapDispatchToProps)(App);
