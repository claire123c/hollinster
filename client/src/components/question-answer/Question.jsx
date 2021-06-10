import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';

const Question = () => {
  return (
    <>
    <Search />
    <ListOfQuestions />
    <span>
      <button><strong>MORE ANSWERED QUESTIONS</strong></button>
      <button><strong>ADD A QUESTION +</strong></button>
    </span>
    </>
  )
}

export default Question;