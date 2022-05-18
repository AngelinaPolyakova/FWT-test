import { Input, Range, Select } from "fwt-internship-uikit";
import React from "react";
import "./ComponentsUI.scss";
import SelectAuthorsForm from "./SelectAuthors";
import SelectLocationsForm from "./SelectLocations";

function ComponentsUI() {
  return (
    <div className="componentsUIWrapper">
      <Input />
      <SelectAuthorsForm />
      <SelectLocationsForm />
      <Range />
    </div>
  );
}
export default ComponentsUI;
