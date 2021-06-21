import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

const IndividualQuestionRow = styled.div`
`;

export default function IndividualQuestion(props) {
  console.log('this is props from individual question', props);
  const question = props.question.question_body;
  const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness);
  const [yesClicked, toggleClicked] = useState(false);
  // need to modify this handleYesClick function to something that interacts with API
  const handleYesClick = () => {
    if (!yesClicked && yesClicked === false) {
      toggleClicked(true);
      setHelpfulness(helpfulness + 1);
      axios.put(`/qa/questions/${props.question.question_id}/helpful`)
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <IndividualQuestionRow>
      <span>
        <strong>
          Q: {question}
        </strong>
      </span>
      <span>
        Helpful?
        <span
          role="button"
          onClick={() => handleYesClick()}
        >
          Yes
        </span> ({helpfulness}) | <AddAnswerForm product={props.product} question={props.question.question_body} questionID={props.question.question_id} getQuestions={props.getQuestions} /></span>
      <IndividualAnswer answers={props.question.answers} />
    </IndividualQuestionRow>
  );
};