import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => (
  <div data-testid="component-guess-words">
    {guessedWords.length === 0 ? (
      <span data-testid="instructions-guess-words">
        Type to try to guess the word
      </span>
    ) : (
      <div data-testid="guess-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
              <tr data-testid="guess-word" key={index}>
                <td>{guessedWord}</td>
                <td>{letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
