import React from "react";

import { shallow } from "enzyme";
import { getByTestId, storeFactory } from "../test/test-utils";
import Input from "./input.component";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();
describe("render", () => {
  describe("words has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const inputComponent = getByTestId(wrapper, "input-component");
      expect(inputComponent.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = getByTestId(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const inputSubmitButton = getByTestId(wrapper, "input-submit-button");
      expect(inputSubmitButton.length).toBe(1);
    });
  });

  describe("words has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const inputComponent = getByTestId(wrapper, "input-component");
      expect(inputComponent.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = getByTestId(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("renders submit button", () => {
      const inputSubmitButton = getByTestId(wrapper, "input-submit-button");
      expect(inputSubmitButton.length).toBe(0);
    });
  });
});

describe("update state", () => {});
