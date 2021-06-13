import React, { useState, useEffect } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import Modal from 'react-modal';
import { sampleQuestionsList, sampleAnswersList } from './sampleData.js';

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

  const [ nickname, setNickname ] = useState('');
  const [ email, setEmail ] = useState('');

  console.log('sample questions:', sampleQuestionsList.results[0]);
  console.log('nickname input value:', nickname, 'email value', email);
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
        <form>
          <div>
          <h1>Submit Your Answer</h1>
          <span><strong>Your Nickname*:</strong> <input type="text"
                                                        placeholder="Example: Jack123"
                                                        onChange={(e) => setNickname(e.target.value)}
                                                        value={nickname}></input>
          </span>
          <p>(For privacy reasons, do not use your full name or address)</p>
          </div>
          <div>
          <br />
          <span><strong>Your Email*:</strong> <input type="text"
                                                     placeholder="Example: Jack123@email.com"
                                                     onChange={e => setEmail(e.target.value)}
                                                     value={email}></input>
          </span>
          <p>(For authentication reasons, you will not be emailed)</p>
          </div>
          <br />
          <strong>Your Answer*:</strong>
          <br />
            <textarea>
            </textarea>
          <br />
          * is mandatory
          <hr />
          <button onClick={() => {
            console.log('will open another pop up that lets you upload some photos')
            event.preventDefault();
            }}>Upload Your Photos</button>
          <button onClick={handleModalClose}>Submit</button>
        </form>
      </Modal>
    </p>
    <IndividualAnswer />
    </>
  )
}

export default IndividualQuestion;