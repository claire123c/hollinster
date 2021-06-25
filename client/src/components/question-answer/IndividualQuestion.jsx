import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Answers from './Answers.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

const IndividualQuestionRow = styled.div`
`;

const HelpfulnessSection = styled.span`
`;

const UnderlinedButtons = styled.button`
  border: none;
  text-decoration: underline;
`;

export default function IndividualQuestion(props) {
  const question = props.question.question_body;
  const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness);
  const [yesClicked, toggleClicked] = useState(false);
  // need to modify this handleYesClick function to something that interacts with API
  const handleYesClick = () => {
    if (!yesClicked) {
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
      <HelpfulnessSection>
        Helpful?
        <UnderlinedButtons
          disabled={yesClicked}
          onClick={() => handleYesClick()}
        >
          Yes
        </UnderlinedButtons> ({helpfulness}) | <AddAnswerForm product={props.product} question={props.question.question_body} questionID={props.question.question_id} getQuestions={props.getQuestions} />
      </HelpfulnessSection>
      <Answers answers={props.question.answers} product={props.product} />
    </IndividualQuestionRow>
  );
}
