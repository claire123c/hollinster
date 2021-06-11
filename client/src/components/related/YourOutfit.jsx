import React from 'react';
import Card from './Card.jsx';

export default function YourOutfit({outfit}) {
  console.log(outfit)
  const addToFit = () => {
    outfit.push(current)
  };

  return (
    <>
      {/* <AddToOutfit /> */}
      {outfit.map((product) => (<Card product={product} key={product} />))}
    </>
  );
}

