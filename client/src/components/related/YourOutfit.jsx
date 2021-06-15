import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({ outfit, addToOutfit }) {

  //   useEffect(() => {
  //     setOutfit(JSON.parse(localStorage.getItem('outfit')));
  //   }, []);

  return (
    <>
      <AddToOutfit addToOutfit={addToOutfit} />
      {outfit.map((product) => (
        <OutfitCard
          product={product}
          key={product.id}
        />
      ))}
    </>
  );
}

