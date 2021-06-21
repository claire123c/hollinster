import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const IndividualAnswerRow = styled.div`
`;

const MoreAnswersButton = styled.button`
border: none;
`;

const UnderlinedButtons = styled.button`
border: none;
text-decoration: underline;
`;

export default function IndividualAnswer(props) {
  console.log(props, 'individual answer');
  const listOfAnswers = [];
  Object.keys(props.answers).forEach((answerID) => listOfAnswers.push(props.answers[answerID]));
  const [amountOfAnswers, setAmountOfAnswers] = useState(2);
  const visibleAnswers = listOfAnswers.slice(0, amountOfAnswers);
  const toggleVisibleAnswers = () => {
    if (amountOfAnswers === 2) {
      setAmountOfAnswers(listOfAnswers.length);
    } else {
      setAmountOfAnswers(2);
    }
  };

  const answers = visibleAnswers.map((answer) => {
    const [answerHelpfulnessClicked, setAnswerHelpfulnessClicked] = useState(false);
    const [reported, setReported] = useState('Report');
    const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);
    const [isReported, setIsReported] = useState(false);
    const handleAnswerHelpfulness = () => {
      if (!answerHelpfulnessClicked) {
        setAnswerHelpfulnessClicked(true);
        setAnswerHelpfulness(answerHelpfulness + 1);
        axios.put(`/qa/answers/${answer.id}/helpful`)
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
            <UnderlinedButtons
              type="button"
              onClick={handleAnswerHelpfulness}
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
            <MoreAnswersButton
              type="button"
              onClick={() => console.log('hopelesslybroken2')}
            >
              <strong>COLLAPSE ANSWERS</strong>
            </MoreAnswersButton>
          </p>
        ) : (
          <p>
            <MoreAnswersButton
              type="button"
              onClick={() => console.log('hopelessly broken')}
            >
              <strong>LOAD MORE ANSWERS</strong>
            </MoreAnswersButton>
          </p>
        )}
      <hr />
    </IndividualAnswerRow>
  );
}
