import React, { useState, useEffect } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import Modal from 'react-modal';
import { sampleQuestionsList, sampleAnswersList } from './sampleData.js';
//modal styles
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//binds modal to the id
Modal.setAppElement('#app');

const IndividualQuestion = () => {

  const [ questions, setQuestions ] = useState(sampleQuestionsList.results[0].question_body);
  const [ helpfulness, setHelpfulness ] = useState(sampleQuestionsList.results[0].question_helpfulness);
  const [ yesClicked, toggleClicked ] = useState(false);

  // modal experimental section
  let subtitle;
  const [ modalOpen, setModalOpen ] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  // function afterModalOpen() {
  //   subtitle.style.color = '#f00';
  // }

  function handleModalClose() {
    setModalOpen(false);
  }
  //end modal experimental section
  //part of modal form
  const [ nickname, setNickname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ answerText, setAnswerText ] = useState('');
  // end part of modal form
  // upload photo modal
  const [ photoModalOpen, setPhotoModalOpen ] = useState(false);

  function handlePhotoModalOpen() {
    setPhotoModalOpen(true);
    event.preventDefault();
  }

  // function afterModalOpen() {
  //   subtitle.style.color = '#f00';
  // }

  function handlePhotoModalClose() {
    setPhotoModalOpen(false);
    event.preventDefault();
  }
  // end upload photo modal

  const [ incorrectFormat, setIncorrectFormat ] = useState(false);

  console.log('sample questions:', sampleQuestionsList.results[0]);
  // console.log('answer text area:', answerText);
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
        // onAfterOpen={() => afterModalOpen()}
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Question Answer Form"
      >
        <form onSubmit={
          () => {
            if (answerText.length === 0 || email.length === 0 || nickname.length === 0) {
              setIncorrectFormat(true);
              event.preventDefault();
            } else {
              handleModalClose();
            }
          }
        }>
          <div>
            <h2>Submit Your Answer</h2>
            <h3>[PRODUCT_NAME] : [QUESTION_BODY]</h3>
            <span><strong>Your Nickname*:</strong>
            <p>(For privacy reasons, do not use your full name or address)</p>
              <input type="text"
                     placeholder="Example: Jack123"
                     onChange={(e) => setNickname(e.target.value)}
                     value={nickname}
                     maxLength="60"
                     minLength="1"></input>
            </span>
            <br />
          </div>
          <div>
          <br />
          <span><strong>Your Email*:</strong></span>
            <p>(For authentication reasons, you will not be emailed)</p>
          <p>
            <input type="email"
                   placeholder="Example: Jack123@email.com"
                   onChange={e => setEmail(e.target.value)}
                   value={email}
                   maxLength="60"
                   minLength="1"></input>
          </p>
          </div>
          <p><strong>Your Answer*:</strong></p>
            <textarea type="text"
                      placeholder="Why did you like the product or not?"
                      onChange={e => setAnswerText(e.target.value)}
                      value={answerText}
                      maxLength="1000"
                      minLength="1"
            >
            </textarea>
            <p>{incorrectFormat ? `This error will occur if:
                                   1. Any mandatory fields are blank
                                   2. The email provided is not in correct email format` : null}</p>
          <hr />
          <p>Note: items marked with * are mandatory</p>
          <button onClick={handlePhotoModalOpen}>Upload Your Photos</button>
          <input type="submit"></input>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </Modal>
      <Modal
        isOpen={photoModalOpen}
        // onAfterOpen={() => afterModalOpen()}
        onRequestClose={handlePhotoModalClose}
        style={customStyles}
        contentLabel="Upload Photo Form"
      >
        <form>
          <input type="file"></input>
          <button onClick={handlePhotoModalClose}>Upload</button>
        </form>
      </Modal>
    </p>
    <IndividualAnswer />
    </>
  )
}

export default IndividualQuestion;