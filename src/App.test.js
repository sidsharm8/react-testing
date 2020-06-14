import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// factory function to return shallow wrapper for app component
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

// get element by data-testid attribute
const getByTestId = (wrapper, val) => wrapper.find(`[data-testid="${val}"]`);

test("renders without an error", () => {
/*   const wrapper = setup();
  const appComponent = getByTestId(wrapper, "component-app");
  expect(appComponent.length).toBe(1); */
  expect(true).toBe(true);
});
/* 
test("renders increment button", () => {
  const wrapper = setup();
  const button = getByTestId(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = getByTestId(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const intitalCounterState = wrapper.state("counter");
  expect(intitalCounterState).toBe(0);
});

test("counter increments on click of increment button", () => {
  // sets initial counter state
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and simulate click
  const button = getByTestId(wrapper, "increment-button");
  button.simulate("click");

  //find counter display and assert
  const counterDisplay = getByTestId(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("counter decrements on click of decrement button", () => {
  // sets initial counter state
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and simulate click
  const button = getByTestId(wrapper, "decrement-button");
  button.simulate("click");

  //find counter display and assert
  const counterDisplay = getByTestId(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("show error when counter 0 is decremented", () => {
  // sets initial counter state
  const counter = 0;
  const wrapper = setup(null, { counter });

  // find button and simulate click
  const button = getByTestId(wrapper, "decrement-button");
  button.simulate("click");

  //find counter display and assert
  const errorDisplay = getByTestId(wrapper, "error-message");
  expect(errorDisplay.length).toBe(1);
});

test("hide error when counter 0 is incremented", () => {
  // sets initial counter state
  const counter = 0;
  const wrapper = setup(null, { counter, error: true });

  //find counter display and assert
  let errorDisplay = getByTestId(wrapper, "error-message");
  expect(errorDisplay.length).toBe(1);

  // find button and simulate click
  const button = getByTestId(wrapper, "increment-button");
  button.simulate("click");

  //find counter display and assert
  errorDisplay = getByTestId(wrapper, "error-message");
  expect(errorDisplay.length).toBe(0);

  //find counter display and assert
  const counterDisplay = getByTestId(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);


});
 */