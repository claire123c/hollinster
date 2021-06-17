import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';
import AddQuestionForm from './AddQuestionForm.jsx';
import axios from 'axios';

export default function Question(props) {
  // const [ product, setProduct ] = useState({});
  const [ arrOfQuestions, setArrOfQuestions ] = useState([]);
  // console.log('question list:', sampleQuestionsList, 'answer list', sampleAnswersList.results);
  const productID = '25168'; // hard ID for now

  useEffect(() => {
    axios.get(`/qa/questions/${productID}`)
      .then(function (response) {
        // setProduct(response.data);
        setArrOfQuestions(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  console.log('this is array of questions', arrOfQuestions);

  return (
    <>
      <Search />
      <ListOfQuestions />
      <span>
        <button onClick={() => console.log('retrieve more questions')}><strong>MORE ANSWERED QUESTIONS</strong></button>
        <AddQuestionForm />
      </span>
    </>
  );
};