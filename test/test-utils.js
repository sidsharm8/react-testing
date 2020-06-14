import checkPropTypes from "check-prop-types";

// get element by data-testid attribute
export const getByTestId = (wrapper, val) =>
  wrapper.find(`[data-testid="${val}"]`);

// check component with expected prop types to see if it throws any errors
export const checkProps = (component, confortingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confortingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
