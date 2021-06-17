import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

const Carousel = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  width: 18rem;
  height: 36rem;
  margin: 1em;
`;

export default function Related({ productID, setProductID, switchProduct }) {
  const [current, setCurrent] = useState(productID);
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
    // if (storedOutfit) {
    //   setOutfit(storedOutfit);
    // } else {
    //   console.log('empty');
    // }
    storedOutfit ? setOutfit(storedOutfit) : null;
  }, []);

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((response) => {
        setCurrent(response.data);
      });
    axios.get(`/products/${productID}/related`)
      .then((response) => {
        setRelated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productID]);

  const addToOutfit = () => {
    // if (!outfit.includes(current)) {
    //   outfit.push(current);
    //   localStorage.setItem('outfit', JSON.stringify(outfit));
    //   console.log('added');
    // } else {
    //   console.log('already exists');

    // const found = outfit.find((element) => element.id === current.id);
    // if (!found) {
    const updatedOutfit = [...outfit];
    if (!updatedOutfit.includes(productID)) {
      updatedOutfit.push(productID);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
      console.log('added');
    } else {
      console.log('already exists');
    }
  };

  const removeFromOutfit = (id) => {
    const updatedOutfit = [...outfit];
    // const found = outfit.find((element) => element.id === current.id);
    const found = updatedOutfit.findIndex((element) => element === id);
    console.log(found);
    if (found !== -1) {
      updatedOutfit.splice(found, 1);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
    }
  };

  return (
    <Carousel>
      <List
        current={current}
        related={related}
        productID={productID}
        switchProduct={switchProduct}
        setProductID={setProductID}
      />
      <YourOutfit
        current={current}
        outfit={outfit}
        productID={productID}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
      />
    </Carousel>
  );
}
