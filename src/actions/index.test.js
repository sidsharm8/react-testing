import { correctGuess, actionTypes } from "./";

describe("correct guess", () => {
  test("returns correction action type", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
