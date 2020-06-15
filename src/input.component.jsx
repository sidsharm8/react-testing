import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    return <div data-testid="input-component"></div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Input);
