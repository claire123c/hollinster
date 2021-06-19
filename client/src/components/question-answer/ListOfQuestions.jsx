import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';
import { sampleQuestionsList } from './sampleData.js';

// map over questions
// make it render conditionally to 2 at a time
// get load more answers to increment the
// properly route it to answers

export default function ListOfQuestions(props) {
  console.log('props.questions in list of qs:', props.questions);
  const individualQuestion = props.questions.length === 0 ? 'WAITING FOR DATA' : (
    props.questions.map((question) => (
      <IndividualQuestion key={question.question_id} question={question} />
    ))
  );
  // if data is not present, make individual question render string 'Loading..'
  if (props.questions.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <>
      <div>{individualQuestion}</div>
      <p onClick={() => console.log('render more answers')}><strong>LOAD MORE ANSWERS</strong></p>
    </>
  );
};
