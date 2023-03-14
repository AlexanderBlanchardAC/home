import {
    SELECT_CATEGORY, 
    SELECT_QUESTION_AMOUNT,
    SELECT_QUESTION_TYPE,
    SELECT_DIFFICULTY,
    CHANGE_SCORE
} from "./actionTypes";

export const handleSelectCategory = (payload) => ({
    type: SELECT_CATEGORY,
    payload,
});

export const handleSelectQuestionAmount = (payload) => ({
    type: SELECT_QUESTION_AMOUNT,
    payload,
});

export const handleSelectQuestionType = (payload) => ({
    type: SELECT_QUESTION_TYPE,
    payload,
});

export const handleSelectDifficulty = (payload) => ({
    type: SELECT_DIFFICULTY,
    payload,
});

export const handleChangeScore = (payload) => ({
    type: CHANGE_SCORE,
    payload,
});