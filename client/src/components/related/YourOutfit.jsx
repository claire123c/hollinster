import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

// export default function YourOutfit({outfit, addToOutfit}) {
//   const addToFit = () => {
//     outfit.push(current)
//   };

const useStateWithLocalStorage = localStorageKey => {
  const [outfitList, setOutfitList] = useState([])
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

export default function YourOutfit() {
  const [value, setValue] = useStateWithLocalStorage(
    'outfit'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

  // return (
  //   <>
  //     {outfit.map((product) => (<OutfitCard product={product} key={product} addToOutfit={addToOutfit} />))}
  //   </>
  // );
// }

