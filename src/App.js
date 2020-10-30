import React from "react";
import Map from "./containers/Map";
import Header from "./components/Header";
import { StyledAppContainer } from "./styles";

function App() {
  return (
    <StyledAppContainer>
      <Header />
      <Map />
    </StyledAppContainer>
  );
}

export default App;
