import React, { useState } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

export default function IndividualQuestion() {
  const [questions, setQuestions] = useState(sampleQuestionsList.results[0].question_body);
  const [helpfulness, setHelpfulness] = useState(sampleQuestionsList.results[0].question_helpfulness);
  const [yesClicked, toggleClicked] = useState(false);

  // console.log('sample questions:', sampleQuestionsList.results[0]);
  // console.log('answer text area:', answerText);
  // console.log('helpfulness:', helpfulness);
  // console.log('clicked:', yesClicked);

  return (
    <>
      <p><strong>Q: {questions}</strong> <span>Helpful? <u
        onClick={
          () => {
            if (!yesClicked) {
              toggleClicked(true);
              setHelpfulness(helpfulness + 1);
            } else {
              toggleClicked(false);
              setHelpfulness(helpfulness - 1);
            }
          }
        }>Yes</u> ({helpfulness}) | <AddAnswerForm /></span>

      </p>
      <IndividualAnswer />
    </>
  );
};