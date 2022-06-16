import React, { useEffect, useState } from "react";
import "./ComponentsUI.scss";
import SelectAuthorsForm from "./SelectAuthors";
import FirstSelect from "./SelectFWT";
import Select from "./SelectFWT";
import SelectLocationsForm from "./SelectLocations";

function ComponentsUI() {
  return (
    <div className="componentsUIWrapper">
      {/* <SelectAuthorsForm />
      <SelectAuthorsForm />
      <SelectLocationsForm />
      <SelectAuthorsForm /> */}
      <FirstSelect />
    </div>
  );
}
export default ComponentsUI;
