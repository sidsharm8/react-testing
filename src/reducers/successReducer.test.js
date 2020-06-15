import successReducer from "./successReducer";
import { actionTypes } from "../actions";

test("returns default initial state when no action is passed", () => {
  const state = successReducer();
  expect(state).toBe(false);
});

test("returns state true when correct guess action type is passed", () => {
  const state = successReducer(undefined, { type : actionTypes.CORRECT_GUESS});
  expect(state).toBe(true);
});
