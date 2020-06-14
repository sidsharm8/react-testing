import React from "react";
import { shallow } from "enzyme";

import Congrats from "./congrats.component";
import { getByTestId, checkProps } from "../test/test-utils";

const defaultProps = {
  success: false,
};
// factory function to return shallow wrapper for app component
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without crashing", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = getByTestId(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when success is false", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = getByTestId(wrapper, "congrats-component");
  expect(congratsComponent.text()).toBe("");
});

test("renders non empty congrats message when success is true", () => {
  const wrapper = setup({ success: true });
  const congratsComponent = getByTestId(wrapper, "congrats-component");
  expect(congratsComponent.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
