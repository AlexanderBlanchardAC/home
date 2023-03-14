import {
    SELECT_CATEGORY, 
    SELECT_DIFFICULTY,
    SELECT_QUESTION_AMOUNT,
    SELECT_QUESTION_TYPE,
    CHANGE_SCORE
} from "./actionTypes";



const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_questions: 20,
    score: 0
};


const reducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            return {
                ...state,
                question_category: action.payload,
            };
        case SELECT_DIFFICULTY:
            return {
                ...state,
                question_difficulty: action.payload,
            };
        case SELECT_QUESTION_AMOUNT:
            return {
                ...state,
                amount_of_questions: action.payload,
            };
        case SELECT_QUESTION_TYPE:
            return {
                ...state,
                question_type: action.payload,
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;