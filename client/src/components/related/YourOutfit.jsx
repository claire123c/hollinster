import React from 'react';
import Card from './Card.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({outfit}) {
  const addToFit = () => {
    outfit.push(current)
  };

  return (
    <>
      <AddToOutfit />
      {outfit.map((product) => (<Card product={product} key={product} />))}
    </>
  );
}

