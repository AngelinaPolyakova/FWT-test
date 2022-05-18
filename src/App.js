import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ComponentsUI from "./components/ComponentsUI/ComponentsUI";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ComponentsUI />

      <div className="galleryWrapper"></div>
    </div>
  );
}

export default App;
