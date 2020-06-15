import React from "react";

import { shallow } from "enzyme";
import { getByTestId, storeFactory } from "../test/test-utils";
import Input from "./input.component";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  console.log(wrapper.debug());
};

setup();
describe("render", () => {
  describe("words has not been guessed", () => {
    test("renders without error", () => {});
  });
});

describe("update", () => {});
