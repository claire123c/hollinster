import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

export default function List({ current, related, productID, setProductID, switchProduct }) {
  const [displayed, setDisplayed] = useState();
  const [length, setLength] = useState();
  const [firstCardIndex, setFirstCardIndex] = useState(0);

  useEffect(() => {
    setFirstCardIndex(0);
  }, [related]);

  const previousCard = () => {
    const previousIndex = firstCardIndex - 1;
    setFirstCardIndex(previousIndex);
  };

  const nextCard = () => {
    const nextIndex = firstCardIndex + 1;
    setFirstCardIndex(nextIndex);
  };

  const displayedCards = related.slice(firstCardIndex, firstCardIndex + 4);

  return (
    <>
      {(related && firstCardIndex) === 0 ? null : <h1 onClick={previousCard}>&#8249;</h1>}
      {displayedCards.map((product) => (
        <Card
          current={current}
          product={product}
          key={product}
          productID={productID}
          switchProduct={switchProduct}
          setProductID={setProductID}
        />
      ))}
      {(related && firstCardIndex) + 3 === related.length - 1
        ? null : <h1 onClick={nextCard}>&#8250;</h1>}
    </>
  );
}
