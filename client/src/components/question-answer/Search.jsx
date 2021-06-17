import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionSearchInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 1% 0;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 14px;
    padding-left: 3%;
  }
`;

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <>
      <QuestionSearchInput type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      >
      </QuestionSearchInput>
    </>
  );
};
