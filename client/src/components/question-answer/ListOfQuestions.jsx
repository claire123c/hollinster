import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

export default function ListOfQuestions() {
  return (
    <>
      <IndividualQuestion />
      <p onClick={() => console.log('render more answers')}><strong>LOAD MORE ANSWERS</strong></p>
    </>
  );
};
