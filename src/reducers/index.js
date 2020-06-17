import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWords.reducer";
import secretWord from "./secretWord.reducer";

const rootReducer = combineReducers({ success, guessedWords, secretWord });

export default rootReducer;
