import React from "react";
import { Range } from "fwt-internship-uikit";
import style from "./Range.module.css";

const RangeForm = () => {
  return (
    <div className={style.rangeWrapper}>
      <Range className={style.rangeForm} />
    </div>
  );
};
export default RangeForm;
