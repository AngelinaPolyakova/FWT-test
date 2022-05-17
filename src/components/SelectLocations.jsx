import React from "react";
import { Select } from "fwt-internship-uikit";
import style from "./SelectLocations.module.css";

const SelectLocationsForm = () => {
  return (
    <div className={style.selectLocationsWrapper}>
      <Select className={style.selectLocationsForm} value={"Locations"} />
    </div>
  );
};
export default SelectLocationsForm;
