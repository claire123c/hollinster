import React, { useState, useEffect } from 'react';

const Search = () => {

  const [ search, setSearch ] = useState('');

  return (
    <>
    <p>QUESTIONS & ANSWERS</p>
    <input type="text"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    >

    </input>
    </>
  )
}

export default Search;