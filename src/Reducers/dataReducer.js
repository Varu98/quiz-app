import {
  ADD_GOT_SELECTED_OPTION,
  ADD_GOT_USER_ANSWER,
  ADD_PANCHAYAT_SELECTED_OPTION,
  ADD_PANCHAYAT_USER_ANSWER,
  DISPLAY_GOT_QUIZ,
  DISPLAY_PANCHAYAT_QUIZ,
  GET_GOT_DATA,
  GET_PANCHAYAT_DATA,
  INCREMENT_GOT_SCORE,
  INCREMENT_PANCHAYAT_SCORE,
} from '../Reducers/Constants';
export const initialData = {
  gameOfThrones: [],
  gotAnswersByUser: [],
  panchayatAnswersByUser: [],
  gotSelectedOption: [],
  panchayatSelectedOption: [],
  panchayat: [],
  displayQuiz: '',
  gotScore: 0,
  panchayatScore: 0,
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PANCHAYAT_DATA:
      return {
        ...state,
        panchayat: [...payload],
      };
    case GET_GOT_DATA:
      return {
        ...state,
        gameOfThrones: [...payload],
      };
    case DISPLAY_PANCHAYAT_QUIZ:
      return {
        ...state,
        displayQuiz: payload,
      };
    case DISPLAY_GOT_QUIZ:
      return {
        ...state,
        displayQuiz: payload,
      };
    case INCREMENT_GOT_SCORE:
      return {
        ...state,
        gotScore: payload.length,
      };
    case INCREMENT_PANCHAYAT_SCORE:
      return {
        ...state,
        panchayatScore: payload.length,
      };
    case ADD_GOT_SELECTED_OPTION:
      return {
        ...state,
        gotSelectedOption: [payload],
      };
    case ADD_GOT_USER_ANSWER:
      return {
        ...state,
        gotAnswersByUser: [...state.gotAnswersByUser, ...payload],
      };
    case ADD_PANCHAYAT_SELECTED_OPTION:
      return {
        ...state,
        panchayatSelectedOption: [payload],
      };
    case ADD_PANCHAYAT_USER_ANSWER:
      return {
        ...state,
        panchayatAnswersByUser: [...state.panchayatAnswersByUser, ...payload],
      };
    default:
      return { ...state };
  }
};
