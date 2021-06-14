import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({ current, addToOutfit }) {
  const [outfit, setOutfit] = useState([25167]);

  //   useEffect(() => {
  //     setOutfit(JSON.parse(localStorage.getItem('outfit')));
  //   }, []);

  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
  });

  return (
    <>
      {outfit.map((product) => (
        <OutfitCard
          product={product}
          key={product}
          addToOutfit={addToOutfit}
        />
      ))}
    </>
  );
}

