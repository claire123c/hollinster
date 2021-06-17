import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';
import AddQuestionForm from './AddQuestionForm.jsx';

const QuestionContainer = styled.div`
  color: #343a40;
`;

export default function Question() {
  // const [ product, setProduct ] = useState({});
  const [arrOfQuestions, setArrOfQuestions] = useState([]);
  // console.log('question list:', sampleQuestionsList, 'answer list', sampleAnswersList.results);
  const productID = '25168'; // hard ID for now, try to draw id located in App

  useEffect(() => {
    axios.get(`/qa/questions/${productID}`)
      .then(function (response) {
        // setProduct(response.data);
        setArrOfQuestions(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log('this is array of questions', arrOfQuestions);

  return (
    <QuestionContainer>
      <p>QUESTIONS & ANSWERS</p>
      <Search />
      <ListOfQuestions />
      <span>
        <button onClick={() => console.log('retrieve more questions')}><strong>MORE ANSWERED QUESTIONS</strong></button>
        <AddQuestionForm />
      </span>
    </QuestionContainer>
  );
};