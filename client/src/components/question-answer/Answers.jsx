import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import IndividualAnswer from './IndividualAnswer.jsx';

const IndividualAnswerRow = styled.div`
`;

const MoreAnswersButton = styled.button`
border: none;
`;

export default function Answers(props) {
  const listOfAnswers = [];
  Object.keys(props.answers).forEach((answerID) => listOfAnswers.push(props.answers[answerID]));
  const [amountOfAnswers, setAmountOfAnswers] = useState(2);
  const visibleAnswers = listOfAnswers.slice(0, amountOfAnswers);
  const moreAnswers = "LOAD MORE ANSWERS";
  const collapseAnswers = "COLLAPSE ANSWERS";
  const [moreAnswersText, setMoreAnswersText] = useState(moreAnswers);

  const toggleVisibleAnswers = () => {
    if (amountOfAnswers === 2) {
      setAmountOfAnswers(listOfAnswers.length);
      setMoreAnswersText(collapseAnswers);
    } else {
      setAmountOfAnswers(2);
      setMoreAnswersText(moreAnswers);
    }
  };

  const individualAnswer = visibleAnswers.map((answer) => (
    <div>
      <IndividualAnswer key={props.answers.id} answers={answer} product={props.product} />
    </div>
  ));

  return (
    <>
      <br />
      <div>
        {individualAnswer}
      </div>
      <IndividualAnswerRow>
        <br />
        <p>
          <MoreAnswersButton
            type="button"
            onClick={toggleVisibleAnswers}
          >
            <strong>{listOfAnswers.length > 2 ? moreAnswersText : null}</strong>
          </MoreAnswersButton>
        </p>
        <hr />
      </IndividualAnswerRow>
    </>
  );
}
