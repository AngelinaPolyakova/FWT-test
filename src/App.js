import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";

import { darkTheme, GlobalStyles, lightTheme } from "./themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        Themes on the React
        <button onClick={() => themeToggler()}>Dark/Light</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
