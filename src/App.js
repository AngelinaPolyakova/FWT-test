import React from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/Input";
import RangeForm from "./components/Range";
import SelectAuthorsForm from "./components/SelectAuthors";
import SelectLocationsForm from "./components/SelectLocations";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div>
        <div className="selectsWrapper">
          <InputForm />
          <SelectAuthorsForm />
          <SelectLocationsForm />
          <RangeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
