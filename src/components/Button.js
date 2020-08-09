import React, { Component } from "react";
import PropTypes from "prop-types";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  //Function for changing the hover state when mouse pointer enters inside the button area
  handleMouseIn() {
    this.setState({ hover: true });
  }

  //Function for changing the hover state when mouse pointer moves out of the button area
  handleMouseOut() {
    this.setState({ hover: false });
  }
  render() {
    //   setting the display of tooltip as block and none according to the  hovering of mouse
    const tooltipStyle = {
      display: this.state.hover ? "block" : "none",
    };

    const { position } = this.props;
    // sending the selected option value as a prop to a button component
    return (
      <div className="hoverButton">
        <button
          onMouseOver={this.handleMouseIn.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
          Hover me
          <div className={"tooltiptext " + position} style={tooltipStyle}>
            {this.props.position}
          </div>
        </button>
      </div>
    );
  }
}
export default Button;
