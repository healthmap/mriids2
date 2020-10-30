import React from "react";
import Map from "./containers/Map";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { StyledAppContainer } from "./styles";

function App() {
  return (
    <StyledAppContainer>
      <Header />
      <Sidebar />
      <Map />
    </StyledAppContainer>
  );
}

export default App;
