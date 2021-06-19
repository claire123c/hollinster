import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx'
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({ outfit, addToOutfit, removeFromOutfit }) {
  const [firstCardIndex, setFirstCardIndex] = useState(0);

  const previousCard = () => {
    const previousIndex = firstCardIndex - 1;
    setFirstCardIndex(previousIndex);
  };

  const nextCard = () => {
    const nextIndex = firstCardIndex + 1;
    setFirstCardIndex(nextIndex);
  };

  const displayedCards = outfit.slice(firstCardIndex, firstCardIndex + 3);

  return (
    <>
      {firstCardIndex === 0 ? null : <h1 onClick={previousCard}>&#8249;</h1>}
      <AddToOutfit addToOutfit={addToOutfit} />
      {displayedCards.map((product) => (
        <OutfitCard
          product={product}
          key={product}
          removeFromOutfit={removeFromOutfit}
        />
      ))}
      {(outfit.length > 4 && firstCardIndex + 2) === outfit.length -1 ? null : <h1 onClick={nextCard}>&#8250;</h1>}
    </>
  );
}

YourOutfit.propTypes = {
  outfit: PropTypes.instanceOf(Array).isRequired,
  addToOutfit: PropTypes.func.isRequired,
  removeFromOutfit: PropTypes.func.isRequired,
};
