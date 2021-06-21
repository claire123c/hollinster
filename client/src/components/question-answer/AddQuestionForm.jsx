import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styled from 'styled-components';

const AddQuestion = styled.button`
  padding: 20px;
  border: 5px solid;
  margin: 3%;
`;

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

Modal.setAppElement('#app');

export default function AddQuestionForm(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [incorrectFormat, setIncorrectFormat] = useState(false);
  const product = props.questionBody.product;

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
    setNickname('');
    setEmail('');
    setQuestionText('');
  }

  function handleSubmit() {
    if (questionText.length === 0 || email.length === 0 || nickname.length === 0) {
      setIncorrectFormat(true);
    } else {
      axios.post('/qa/questions', {
        body: questionText,
        name: nickname,
        email: email,
        product_id: product,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      handleModalClose();
    }
  }

  return (
    <>
      <AddQuestion
        onClick={handleModalOpen}
        type="button"
      >
        <strong>
          ADD A QUESTION +
        </strong>
      </AddQuestion>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={() => afterModalOpen()}
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Question Form"
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            e.preventDefault();
          }}
        >
          <div>
            <h2>Ask Your Question</h2>
            <h3>About the [{product}]</h3>
            <span>
              <label
                htmlFor="nickname"
              >
                <strong>
                  Your Nickname*:
                </strong>
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
            <br />
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
            <label htmlFor="question">
              <p><strong>Your Question*:</strong></p>
              <textarea
                type="text"
                placeholder="Why did you like the product or not?"
                onChange={(e) => setQuestionText(e.target.value)}
                value={questionText}
                maxLength="1000"
                minLength="1"
                name="question"
              />
            </label>
          </div>
          <p>
            {incorrectFormat ? `This error will occur if:
                                   1. Any mandatory fields are blank
                                   2. The email provided is not in correct email format` : null}
          </p>
          <hr />
          <p>Note: items marked with * are mandatory</p>
          <input
            type="submit"
          />
          <button
            onClick={handleModalClose}
            type="button"
          >
            Close
          </button>
        </form>
      </Modal>
    </>
  );
}
