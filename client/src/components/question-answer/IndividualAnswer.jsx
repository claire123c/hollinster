import React, { useState, useEffect } from 'react';
import {sampleAnswersList } from './sampleData.js'

const IndividualAnswer = () => {
  const [answers, setAnswers] = useState(sampleAnswersList.results[0].body);
  console.log('sampleanswer:', sampleAnswersList.results[0]);
  return (
    <>
    <span><strong>A:</strong> {answers}</span>
    </>
  )
}

export default IndividualAnswer;