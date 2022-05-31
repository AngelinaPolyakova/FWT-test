import { Input, Range, Select } from "fwt-internship-uikit";
import React, { useEffect, useState } from "react";
import "./ComponentsUI.scss";
import SelectAuthorsForm from "./SelectAuthors";
import SelectLocationsForm from "./SelectLocations";

function ComponentsUI() {
  return (
    <div className="componentsUIWrapper">
      <SelectAuthorsForm />
      <SelectAuthorsForm />
      <SelectLocationsForm />
      <SelectAuthorsForm />
    </div>
  );
}
export default ComponentsUI;
