import React, { useState } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';
import AddQuestionForm from './AddQuestionForm.jsx';
import styled from 'styled-components';

const MoreAnsweredQuestions = styled.button`
  padding: 20px;
  border: 5px solid;
  margin: 3%;
`;

export default function ListOfQuestions(props) {
  const [amountOfQuestions, setAmountOfQuestions] = useState(4);
  const listOfQuestions = props.questions.length === 0
    ? null : props.questions;
  const visibleQuestions = props.questions.length === 0 ? null : listOfQuestions.slice(0, amountOfQuestions);
  const individualQuestion = props.questions.length === 0 ? 'WAITING FOR DATA' : (
    visibleQuestions.map((question) => (
      <IndividualQuestion key={question.question_id} question={question} product={props.product} getQuestions={props.getRequest} />
    ))
  );
  const addQuestionButton = props.questions.length === 0 || visibleQuestions.length === listOfQuestions.length || visibleQuestions.length > listOfQuestions.length  ? null : <MoreAnsweredQuestions onClick={() => setAmountOfQuestions(amountOfQuestions + 2)}><strong>MORE ANSWERED QUESTIONS</strong></MoreAnsweredQuestions>;
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
        <AddQuestionForm
          questionBody={props}
          getQuestions={props.getRequest}
          product={props.product}
        />
      </span>
    </>
  );
}
