import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

const Carousel = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  scroll-behavior: smooth;
  width: 18rem;
  height: 36rem;
  margin: 1rem;
`;

const CarouselHeading = styled.h1`
  margin: 1rem;
`;

export default function Related({ productID, setProductID, switchProduct }) {
  const [current, setCurrent] = useState(productID);
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
    if (storedOutfit) {
      setOutfit(storedOutfit);
    }
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
    const updatedOutfit = [...outfit];
    if (!updatedOutfit.includes(productID)) {
      updatedOutfit.push(productID);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
    }
  };

  const removeFromOutfit = (id) => {
    const updatedOutfit = [...outfit];
    const index = updatedOutfit.findIndex((element) => element === id);
    if (index !== -1) {
      updatedOutfit.splice(index, 1);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
    }
  };

  return (
    <>
      <CarouselHeading>RELATED PRODUCTS</CarouselHeading>
      <Carousel>
        <List
          current={current}
          related={related}
          productID={productID}
          switchProduct={switchProduct}
          setProductID={setProductID}
        />
      </Carousel>
      <CarouselHeading>YOUR OUTFIT</CarouselHeading>
      <Carousel>
        <YourOutfit
          current={current}
          outfit={outfit}
          productID={productID}
          addToOutfit={addToOutfit}
          removeFromOutfit={removeFromOutfit}
        />
      </Carousel>
    </>
  );
}
