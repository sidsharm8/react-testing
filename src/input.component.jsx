import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const { success } = this.props;

    return (
      <div data-testid="input-component">
        {!success ? (
          <div>
            <form>
              <input data-testid="input-box"></input>
              <button data-testid="input-submit-button"></button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
