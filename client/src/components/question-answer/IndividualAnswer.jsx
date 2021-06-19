import React, { useState } from 'react';
import styled from 'styled-components';
import { sampleAnswersList } from './sampleData.js';

const IndividualAnswerRow = styled.div`
`;

export default function IndividualAnswer(props) {
  const listOfAnswers = [];
  Object.keys(props.answers).forEach((answerID) => listOfAnswers.push(props.answers[answerID]));
  const [amountOfAnswers, setAmountOfAnswers] = useState(2);
  const visibleAnswers = listOfAnswers.slice(0, amountOfAnswers);
  console.log('visible answers in individual answers:', visibleAnswers);
  const [answerHelpfulnessClicked, setAnswerHelpfulnessClicked] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [reported, setReported] = useState('Report');

  const handleAnswerHelpfulness = () => {
    if (!answerHelpfulnessClicked) {
      setAnswerHelpfulnessClicked(true);
      setAnswerHelpfulnessRating(answerHelpfulnessRating + 1);
    } else {
      setAnswerHelpfulnessClicked(false);
      setAnswerHelpfulnessRating(answerHelpfulnessRating - 1);
    }
  };

  const handleReported = () => {
    if (!isReported) {
      setIsReported(true);
      setReported('Reported');
    } else {
      setIsReported(false);
      setReported('Report');
    }
  };

  const answers = visibleAnswers.map((answer) => {
    const answerDate = answer.date;
    const arrOfStringMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(answerDate);
    const stringOfDate = `${arrOfStringMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div key={answer.id}>
        <strong>A:</strong> {answer.body}
        <p>
          <span>
            by {answer.answerer_name}, {stringOfDate} | Helpful?
            &nbsp;
            <button
              type="button"
              onClick={handleAnswerHelpfulness}
            >
              Yes
            </button>
            &nbsp;
            (
            {answer.helpfulness}
            )
            &nbsp;|&nbsp;
            <button
              type="button"
              onClick={handleReported}
            >
              {reported}
            </button>
          </span>
        </p>
      </div>
    );
  });

  return (
    <IndividualAnswerRow>
      <br />
      <span>
        {answers}
      </span>
      {listOfAnswers.length <= 2 ? null
        : amountOfAnswers === listOfAnswers.length ? (
          <p>
            <button
              type="button"
              onClick={() => setAmountOfAnswers(2)}
            >
              <strong>COLLAPSE ANSWERS</strong>
            </button>
          </p>
        ) : (
          <p>
            <button
              type="button"
              onClick={() => setAmountOfAnswers(listOfAnswers.length)}
            >
              <strong>LOAD MORE ANSWERS</strong>
            </button>
          </p>
        )}
      <hr />
    </IndividualAnswerRow>
  );
}
