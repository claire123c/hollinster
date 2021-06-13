import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';
import Modal from 'react-modal';

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

const Question = () => {
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
  const [ questionText, setQuestionText ] = useState('');
  const [ incorrectFormat, setIncorrectFormat ] = useState(false);

  return (
    <>
    <Search />
    <ListOfQuestions />
    <span>
      <button onClick={() => console.log('retrieve more questions')}><strong>MORE ANSWERED QUESTIONS</strong></button>
      <button onClick={handleModalOpen}><strong>ADD A QUESTION +</strong></button>
    </span>
    <Modal
        isOpen={modalOpen}
        // onAfterOpen={() => afterModalOpen()}
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Question Form"
      >
        <form onSubmit={
          () => {
            if (questionText.length === 0 || email.length === 0 || nickname.length === 0) {
              setIncorrectFormat(true);
              event.preventDefault();
            } else {
              handleModalClose();
              event.preventDefault();
            }
            event.preventDefault();
          }
        }>
          <div>
            <h2>Ask Your Question</h2>
            <h3>About the [PRODUCT_NAME]</h3>
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
          <p><strong>Your Question*:</strong></p>
            <textarea type="text"
                      placeholder="Why did you like the product or not?"
                      onChange={e => setQuestionText(e.target.value)}
                      value={questionText}
                      maxLength="1000"
                      minLength="1"
            >
            </textarea>
            <p>{incorrectFormat ? `This error will occur if:
                                   1. Any mandatory fields are blank
                                   2. The email provided is not in correct email format` : null}</p>
          <hr />
          <p>Note: items marked with * are mandatory</p>
          <input type="submit"></input>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </Modal>
    </>
  )
}

export default Question;