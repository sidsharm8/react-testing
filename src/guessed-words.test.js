import React from "react";
import { shallow } from "enzyme";

import GuessedWords from "./guessed-words.component";
import { getByTestId, checkProps } from "../test/test-utils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
// factory function to return shallow wrapper for app component
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(GuessedWords, expectedProps);
});

describe("if there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without crashing", () => {
    const guessComponent = getByTestId(wrapper, "component-guess-words");
    expect(guessComponent.length).toBe(1);
  });

  test("renders instructions to try to guess the word", () => {
    const guessInstructions = getByTestId(wrapper, "instructions-guess-words");
    expect(guessInstructions.text().length).not.toBe(0);
  });
});

describe("if there  words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 4 },
    { guessedWord: "bony", letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without crashing", () => {
    const guessComponent = getByTestId(wrapper, "component-guess-words");
    expect(guessComponent.length).toBe(1);
  });
  test("renders guess words section", () => {
    const guessWords = getByTestId(wrapper, "guess-words");
    expect(guessWords.length).toBe(1);
  });
  test("renders correct number of guessed words", () => {
    const guessWord = getByTestId(wrapper, "guess-word");
    expect(guessWord.length).toBe(guessedWords.length);
  });
});
