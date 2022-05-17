import React, { useState } from "react";
import { Input } from "fwt-internship-uikit";
import "./Input.css";

const InputForm = () => {
  const [value, setValue] = useState("");
  return (
    <div className="inputWrapper">
      <Input
        placeholder="Name"
        className="inputForm"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
export default InputForm;
