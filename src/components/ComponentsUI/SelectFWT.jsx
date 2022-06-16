import { Input, Range, Select } from "fwt-internship-uikit";
import { useState, useEffect } from "react";

function FirstSelect() {
  const [authors, setAuthotrs] = useState([
    {
      id: 1,
      name: "Name1",
    },
    {
      id: 2,
      name: "Name2",
    },
  ]);

  useEffect(() => {
    fetch("https://test-front.framework.team/authors")
      .then((response) => response.json())
      .then((authors) => setAuthotrs(authors));
  }, []);

  let authorsElements = authors.map((author) => ({
    id: author.id,
    label: author.name,
  }));
  return (
    <Select
      disabled={false}
      options={authorsElements}
      isDarkTheme={false}
      value="Author"
    />
  );
}

export default FirstSelect;
