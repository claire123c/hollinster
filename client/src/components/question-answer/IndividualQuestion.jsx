import React, { useState, useEffect } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList, sampleAnswersList } from './sampleData.js';

const IndividualQuestion = () => {

  const [ questions, setQuestions ] = useState(sampleQuestionsList.results[0].question_body);
  const [ helpfulness, setHelpfulness ] = useState(sampleQuestionsList.results[0].question_helpfulness);
  const [ yesClicked, toggleClicked ] = useState(false);

  console.log('sample questions:', sampleQuestionsList.results[0]);
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
      }>Yes</u> ({helpfulness}) | <u onClick={() => console.log('Add Answer clicked')}>Add Answer</u></span>
    </p>
    <IndividualAnswer />
    </>
  )
}

export default IndividualQuestion;