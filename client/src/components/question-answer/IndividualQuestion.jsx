import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

const IndividualQuestionRow = styled.div`

`;

export default function IndividualQuestion() {
  const [questions, setQuestions] = useState(sampleQuestionsList.results[0].question_body);
  const [helpfulness, setHelpfulness] = useState(sampleQuestionsList.results[0].question_helpfulness);
  const [yesClicked, toggleClicked] = useState(false);

  // console.log('sample questions:', sampleQuestionsList.results[0]);
  // console.log('answer text area:', answerText);
  // console.log('helpfulness:', helpfulness);
  // console.log('clicked:', yesClicked);

  const handleYesClick = () => {
    if (!yesClicked) {
      toggleClicked(true);
      setHelpfulness(helpfulness + 1);
    } else {
      toggleClicked(false);
      setHelpfulness(helpfulness - 1);
    }
  };

  return (
    <IndividualQuestionRow>

      <span>
        <strong>
          Q:
          {questions}
        </strong>
      </span>
      <span>
        Helpful?
        <span
          role="button"
          onClick={handleYesClick}
        >
          Yes
        </span> ({helpfulness}) | <AddAnswerForm /></span>
      <IndividualAnswer />
    </IndividualQuestionRow>
  );
};