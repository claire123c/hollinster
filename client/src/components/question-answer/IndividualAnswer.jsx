import React, { useState } from 'react';
import styled from 'styled-components';
import { sampleAnswersList } from './sampleData.js';

const IndividualAnswerRow = styled.div`
`;

export default function IndividualAnswer(props) {
  const [answers] = useState(sampleAnswersList.results[0].body);
  const [answerUsername] = useState(sampleAnswersList.results[0].answerer_name);
  const [answerDate] = useState(sampleAnswersList.results[0].date);
  const [answerHelpfulnessRating, setAnswerHelpfulnessRating] =
    useState(sampleAnswersList.results[0].helpfulness);
  const [answerHelpfulnessClicked, setAnswerHelpfulnessClicked] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [reported, setReported] = useState('Report');
  const arrOfStringMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(answerDate);
  const stringOfDate = `${arrOfStringMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

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
  // console.log('sampleanswer:', sampleAnswersList.results[0], 'answerUsername:', answerUsername);
  return (
    <IndividualAnswerRow>
      <br />
      <span>
        <strong>
          A:
        </strong>
        {answers}
      </span>
      <p>
        by
        {answerUsername}
        ,
        {stringOfDate}
        |
        Helpful?
        <u
          onClick={handleAnswerHelpfulness}>
          Yes
        </u>
        (
        {answerHelpfulnessRating}
        )
        |
        <u
          onClick={handleReported}
        >
          {reported}
        </u>
      </p>
      <hr />
    </IndividualAnswerRow>
  );
}