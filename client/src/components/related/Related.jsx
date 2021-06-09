import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

export default function Related() {
  const [current, setCurrent] = useState('25167');
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  const addToOutfit = () => {
    if (!outfit.includes(current)) {
      setOutfit(outfit.push(current));
    }
  };

  const removeFromOutfit = (selected) => {
    outfit.findIndex((element))

  }

  useEffect(() => {
    axios.get(`/products/${current}/related`)
      .then((response) => {
        setRelated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <List related={related} />
      <YourOutfit outfit={outfit} addToOutfit={addToOutfit} />
    </>
  );
}
