import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// Component class for drop down menu
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // default position is top
      position: "top",
    };
  }

  //   Function to change the position as per the option selected.
  changePosition = (event) => {
    this.setState({ position: event.target.value });
    console.log(this.state.position);
  };
  render() {
    return (
      <div className="box">
        <select onChange={this.changePosition}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <Button position={this.state.position} />
      </div>
    );
  }
}
export default Dropdown;
