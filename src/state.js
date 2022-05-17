import React from "react";
import style from "./App.module.css";
import Header from "./components/Header";
import InputForm from "./components/Input";
import SelectForm from "./components/Select";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.selectsWrapper}>
        <InputForm />
        <SelectForm name="Author" />
      </div>
    </div>
  );
}

export default App;
