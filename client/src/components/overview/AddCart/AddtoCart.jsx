import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const AddtoBag = styled.div`
  margin: 2%;
  width: 80%;
  height: 20%;
`;

const BagButton = styled.button`
  background: transparent
  border: none;
  padding: 7% 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
`;

const Plus = styled.span`
  margin-left: 40%;
  font-size: 20px;
`;

function AddtoCart({ currentSize, skus, setShowError }) {
  console.log(currentSize);
  console.log(skus);
  const addItem = () => {
    if (currentSize === 'SELECT SIZE') {
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
      {checkSkus() ? (
        <BagButton type="button">
          ADD TO BAG
          <Plus>+</Plus>
        </BagButton>
      ) : <></>}
    </AddtoBag>
  );
}

AddtoCart.propTypes = {
  currentSize: PropTypes.string,
  skus: PropTypes.shape({}),
};

AddtoCart.defaultProps = {
  currentSize: 0,
  skus: {},
};

export default AddtoCart;
