import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const QuestionSearchInput = styled.input`
  width: 80%;
  height: 50px;
  margin: 1% 0;
  border: 1px solid black;
  border-right: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 14px;
    padding-left: 3%;
  }
`;

const MagnifyingGlass = styled.button`
  border: 1px solid black;
  border-left: none;
  height: 50px;
  width: 5%;
  background: white;
  position: relative; top: 2px;
`;

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <>
      <form>
        <span>
          <QuestionSearchInput
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
          <MagnifyingGlass
            onClick={() => event.preventDefault()}
          >
            <AiOutlineSearch />
          </MagnifyingGlass>
        </span>
      </form>
    </>
  );
}
