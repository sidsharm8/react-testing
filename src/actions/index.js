import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
      type: actionTypes.GUESS_WORD,
      payload : { guessedWord, letterMatchCount }
  });

  if(guessedWord === secretWord){
    dispatch({
        type: actionTypes.CORRECT_GUESS,
    });
  }
};
