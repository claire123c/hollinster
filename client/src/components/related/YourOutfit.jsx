import React from 'react';
import Card from './Card.jsx';

export default function YourOutfit({outfit}) {
  return (
    <>
      {outfit.map((product) => (<Card product={product} key={product} />))}
    </>
  );
}