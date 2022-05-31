import React, { useState, useEffect } from "react";
import "./App.scss";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Header from "./components/Header/Header";
import ComponentsUI from "./components/ComponentsUI/ComponentsUI";
import { BrowserRouter } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App(props) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div className="wrapper">
            <Header themeToggler={themeToggler} />
            <ComponentsUI />

            <div className="galleryWrapper">
              <Gallery />
            </div>
          </div>
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
