import Select from "react-select";
import * as axios from "axios";
import React, { Component } from "react";
import "./SelectLocations.scss";

class SelectLocationsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: [],
      selectedOption: null,
    };
  }

  async getLocations() {
    const response = await axios.get(
      "https://test-front.framework.team/locations"
    );
    const data = response.data;

    const locations = data.map((location) => ({
      label: location.location,
      value: location.id,
    }));
    this.selectedLocation = locations;

    this.setState({ selectedLocation: locations });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    return (
      <div>
        <Select
          options={this.state.selectedLocation}
          onChange={this.handleChange}
          placeholder="Location"
          className="selectLocationsForm"
          classNamePrefix="selectLocationsForm"
        />
      </div>
    );
  }
}

export default SelectLocationsForm;
