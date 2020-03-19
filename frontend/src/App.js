import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>hey app</div>
    </ThemeProvider>
  );
}

export default App;
