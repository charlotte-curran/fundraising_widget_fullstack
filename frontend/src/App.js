import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/GlobalStyle";
import Widget from "./Widget";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Widget />
    </ThemeProvider>
  );
}

export default App;
