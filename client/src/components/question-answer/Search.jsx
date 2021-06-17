import React, { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');

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
  );
};
