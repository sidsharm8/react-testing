import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => (
  <div data-testid="congrats-component">
    {success ? (
      <span data-testid="congrats-message">
        Congratulations! You guessed the word right!!
      </span>
    ) : (
      ""
    )}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
