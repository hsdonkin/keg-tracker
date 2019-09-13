import React from "react";

class AddSubtractPints extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (keg, amount) => {
    this.props.onKegVolumeChange(keg, amount);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleClick(this.props.keg, 1)}>+</button>
        <button onClick={() => this.handleClick(this.props.keg, -1)}>-</button>
      </React.Fragment>
    );
  }
}

export default AddSubtractPints;
