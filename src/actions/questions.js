import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
export function addQuestionAnswer(uid, question, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    uid,
    question,
    answer,
  };
}

export function removeQuestionAnswer(uid, question, answer) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    uid,
    question,
    answer,
  };
}
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function handleAddQuestionAnswer(question, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const qid = question.id;

    dispatch(addQuestionAnswer(authedUser, question, answer));

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).catch(() =>
      dispatch(removeQuestionAnswer(authedUser, question, answer))
    );
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}