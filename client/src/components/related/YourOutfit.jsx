import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({outfit}) {
  const addToFit = () => {
    outfit.push(current)
  };

  return (
    <>
      {outfit.map((product) => (<OutfitCard product={product} key={product} />))}
    </>
  );
}

