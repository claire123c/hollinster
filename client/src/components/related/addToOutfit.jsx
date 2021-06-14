import React from 'react';

export default function AddToOutfit( {AddToOutfitList} ) {
  return (
    <h2 onClick={() => {AddToOutfitList}}>+</h2>
  );
}
