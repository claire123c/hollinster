import React, { useState, useEffect } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import Modal from 'react-modal';
import { sampleQuestionsList, sampleAnswersList } from './sampleData.js';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

Modal.setAppElement('#app');

const IndividualQuestion = () => {

  const [ questions, setQuestions ] = useState(sampleQuestionsList.results[0].question_body);
  const [ helpfulness, setHelpfulness ] = useState(sampleQuestionsList.results[0].question_helpfulness);
  const [ yesClicked, toggleClicked ] = useState(false);

  // modal experimental section
  const [ modalOpen, setModalOpen ] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  console.log('sample questions:', sampleQuestionsList.results[0]);
  // console.log('helpfulness:', helpfulness);
  // console.log('clicked:', yesClicked);


  return (
    <>
    <p><strong>Q: {questions}</strong> <span>Helpful? <u
    onClick={
      () => {
        if (!yesClicked) {
          toggleClicked(true);
          setHelpfulness(helpfulness + 1);
        } else {
          toggleClicked(false);
          setHelpfulness(helpfulness - 1);
        }
      }
      }>Yes</u> ({helpfulness}) | <u onClick={handleModalOpen}>Add Answer</u></span>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Question Answer Form"
      >
        <form>
          <h2>firstmodal</h2>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </Modal>
    </p>
    <IndividualAnswer />
    </>
  )
}

export default IndividualQuestion;