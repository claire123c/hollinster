import React, { useState } from 'react';
import styled from 'styled-components';
import { sampleAnswersList } from './sampleData.js';

const IndividualAnswerRow = styled.div`
`;

export default function IndividualAnswer(props) {
  console.log('this is props in individual answer:', props.answers);
  const listOfAnswers = [];
  // for (let keys in props.answers) {
  //   listOfAnswers.push(props.answers[keys])
  // };
  Object.keys(props.answers).forEach((answerID) => listOfAnswers.push(props.answers[answerID]));
  console.log('this is a list of answers c/o having to do a ternary', listOfAnswers);
  const [answerUsername] = useState(sampleAnswersList.results[0].answerer_name);
  const [answerHelpfulnessRating, setAnswerHelpfulnessRating] =
    useState(sampleAnswersList.results[0].helpfulness);
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

  const answers = listOfAnswers.map((answer) => {
    const answerDate = answer.date;
    const arrOfStringMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(answerDate);
    const stringOfDate = `${arrOfStringMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div key={answer.id}>
        <strong>A:</strong> {answer.body}
        <p>
          <span>
            by {answer.answerer_name}, {stringOfDate} | Helpful? <button onClick={handleAnswerHelpfulness}>
              Yes
            </button>
            ({answer.helpfulness}) |
            <button onClick={handleReported}>
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
      <hr />
    </IndividualAnswerRow>
  );
}
