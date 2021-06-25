import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

//modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//binds modal to the id
Modal.setAppElement('#app');

export default function AddAnswerForm(props) {
  // modal experimental section
  const [modalOpen, setModalOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answerText, setAnswerText] = useState('');
  // end part of modal form
  // upload photo modal
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
    setNickname('');
    setEmail('');
    setAnswerText('');
  }
  //end modal experimental section
  //part of modal form

  function handlePhotoModalOpen() {
    setPhotoModalOpen(true);
    event.preventDefault();
  }

  // function afterModalOpen() {
  // }

  function handlePhotoModalClose() {
    setPhotoModalOpen(false);
    event.preventDefault();
  }

  function handleSubmit() {
    if (answerText.length === 0 || email.length === 0 || nickname.length === 0) {
      setIncorrectFormat(true);
    } else {
      axios.post(`/qa/questions/${props.questionID}/answers`, {
        body: answerText,
        name: nickname,
        email: email,
        photos: [],
      })
        .then((response) => {
          console.log(response);
          setNickname('');
          setEmail('');
          setAnswerText('');
        })
        .catch((error) => {
          console.log(error);
        });
      handleModalClose();
    }
  }

  // end upload photo modal

  const [incorrectFormat, setIncorrectFormat] = useState(false);

  return (
    <>
      <u onClick={handleModalOpen}>Add Answer</u>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={() => afterModalOpen()}
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Question Answer Form"
      >
        <form
          onSubmit={() => handleSubmit()}
        >
          <div>
            <h2>Submit Your Answer</h2>
            <h3>
              [PRODUCT {props.product}] : {props.question}
            </h3>
            <span>
              <label
                htmlFor="nickname"
              >
                <strong>Your Nickname*:</strong>
                <p>(For privacy reasons, do not use your full name or address)</p>
                <input
                  type="text"
                  placeholder="Example: Jack123"
                  onChange={(e) => setNickname(e.target.value)}
                  value={nickname}
                  maxLength="60"
                  minLength="1"
                  name="nickname"
                />
              </label>
            </span>
          </div>
          <div>
            <br />
            <label htmlFor="email">
              <strong>Your Email*:</strong>
              <p>(For authentication reasons, you will not be emailed)</p>
              <p>
                <input
                  type="email"
                  placeholder="Example: Jack123@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  maxLength="60"
                  minLength="1"
                  name="email"
                />
              </p>
            </label>
          </div>
          <div>
            <label htmlFor="answer">
              <p>
                <strong>Your Answer*:</strong>
              </p>
              <textarea
                type="text"
                placeholder="Why did you like the product or not?"
                onChange={(e) => setAnswerText(e.target.value)}
                value={answerText}
                maxLength="1000"
                minLength="1"
                name="answer"
              />
            </label>
          </div>
          <p>
            {incorrectFormat
              ? 'This error will occur if: 1. Any mandatory fields are blank 2. The email provided is not in correct email format' : null}
          </p>
          <hr />
          <p>Note: items marked with * are mandatory</p>
          <button onClick={handlePhotoModalOpen} type="button">Upload Your Photos</button>
          <input
            type="submit"
          />
          <button onClick={handleModalClose} type="button">Close</button>
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
    </>
  );
}
