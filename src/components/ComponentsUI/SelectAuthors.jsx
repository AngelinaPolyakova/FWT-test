import Select from "react-select";
import * as axios from "axios";
import React, { Component } from "react";
import "./SelectAuthors.scss";

class SelectAuthorsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAuthor: [],
      selectedOption: null,
    };
  }

  async getAuthors() {
    const response = await axios.get(
      "https://test-front.framework.team/authors"
    );
    const data = response.data;

    const authors = data.map((author) => ({
      label: author.name,
      value: author.id,
    }));
    this.selectedAuthor = authors;

    this.setState({ selectedAuthor: authors });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
  };

  componentDidMount() {
    this.getAuthors();
  }

  render() {
    return (
      <div>
        <Select
          options={this.state.selectedAuthor}
          onChange={this.handleChange}
          placeholder="Author"
          className="selectAuthorsForm"
          classNamePrefix="selectAuthorsForm"
        />
      </div>
    );
  }
}

export default SelectAuthorsForm;
