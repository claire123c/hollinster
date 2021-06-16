import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

export default function YourOutfit({ outfit, addToOutfit, removeFromOutfit }) {
  // const [outfit, setOutfit] = useState([]);

  // useEffect(() => {
  //   const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
  //   if (storedOutfit) {
  //     setOutfit(storedOutfit);
  //   } else {
  //     console.log('empty');
  //   }
  //   // storedOutfit ? setOutfit(storedOutfit) : null
  // }, []);

  return (
    <>
      <AddToOutfit addToOutfit={addToOutfit} />
      {outfit.map((product) => (
        <OutfitCard
          product={product}
          key={product}
          removeFromOutfit={removeFromOutfit}
        />
      ))}
    </>
  );
}
