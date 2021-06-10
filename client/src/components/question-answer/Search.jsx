import React, { useState, useEffect } from 'react';

const Search = () => {

  const [ search, setSearch ] = useState('');
  const handleSearchChange = (e) => {
    setSearch(e.target.value)


  }
  console.log(search)
  return (
    <>
    <p>QUESTIONS & ANSWERS</p>
    <input type="text"
           value={search}
           onChange={(e) => handleSearchChange(e)}
           placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    >

    </input>
    </>
  )
}

export default Search;