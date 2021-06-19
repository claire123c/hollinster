import React, { useState } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';
import AddQuestionForm from './AddQuestionForm.jsx';

// map over questions
// make it render conditionally to 2 at a time
// get load more answers to increment the
// properly route it to answers

export default function ListOfQuestions(props) {
  const [amountOfQuestions, setAmountOfQuestions] = useState(4);
  const listOfQuestions = props.questions.length === 0
    ? null : props.questions;
  const visibleQuestions = props.questions.length === 0 ? null : listOfQuestions.slice(0, amountOfQuestions);
  const individualQuestion = props.questions.length === 0 ? 'WAITING FOR DATA' : (
    visibleQuestions.map((question) => (
      <IndividualQuestion key={question.question_id} question={question} />
    ))
  );
  const addQuestionButton = props.questions.length === 0 || visibleQuestions.length === listOfQuestions.length || visibleQuestions.length > listOfQuestions.length  ? null : <button onClick={() => setAmountOfQuestions(amountOfQuestions + 2)}><strong>MORE ANSWERED QUESTIONS</strong></button>;
  // if data is not present, make individual question render string 'Loading..'
  if (props.questions.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <>
      <div>{individualQuestion}</div>
      <span>
        {addQuestionButton}
        <AddQuestionForm />
      </span>
    </>
  );
}
