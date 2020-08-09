import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import Button from "./Button";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="dropdownPosition">
          <Dropdown />
        </div>
      </div>
    );
  }
}
export default App;
