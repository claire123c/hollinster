import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UnderlinedButtons = styled.button`
border: none;
text-decoration: underline;
`;

export default function IndividualAnswer(props) {
  const [answerHelpfulnessClicked, setAnswerHelpfulnessClicked] = useState(false);
  const [reported, setReported] = useState('Report');
  const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answers.helpfulness);
  const [isReported, setIsReported] = useState(false);
  const answerDate = props.answers.date;
  const arrOfStringMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(answerDate);
  const stringOfDate = `${arrOfStringMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  const handleAnswerHelpfulness = () => {
    if (!answerHelpfulnessClicked) {
      setAnswerHelpfulnessClicked(true);
      setAnswerHelpfulness(answerHelpfulness + 1);
      axios.put(`/qa/answers/${props.answers.id}/helpful`)
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.error(error);
        });
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

  return (
    <div key={props.answers.id}>
      <strong>A:</strong> {props.answers.body}
      <p>
        <span>
          by {props.answers.answerer_name}, {stringOfDate} | Helpful?
          &nbsp;
          <UnderlinedButtons
            type="button"
            onClick={() => handleAnswerHelpfulness()}
          >
            Yes
          </UnderlinedButtons>
          &nbsp;
          (
          {answerHelpfulness}
          )
          &nbsp;|&nbsp;
          <UnderlinedButtons
            type="button"
            onClick={handleReported}
          >
            {reported}
          </UnderlinedButtons>
        </span>
      </p>
    </div>
  );
}
