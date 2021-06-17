import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const AddtoBag = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function AddtoCart({ currentSize, skus, setShowError }) {
  console.log(currentSize);
  console.log(skus);
  const addItem = () => {
    if (currentSize === 0) {
      setShowError(true);
    } else {
      axios.post('/cart', { sku_id: currentSize })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const checkSkus = () => {
    if (skus) {
      if (Object.keys(skus).length > 0) {
        return true;
      }
    }
    return false;
  };
  return (
    <AddtoBag onClick={addItem}>
      {checkSkus() ? <button>ADD TO BAG</button> : <></>}
      <span> &#x2b;</span>
    </AddtoBag>
  );
}

export default AddtoCart;
