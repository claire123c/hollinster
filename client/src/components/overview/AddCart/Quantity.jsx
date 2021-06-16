import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityBox = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Quantity({ currentSize }) {
  const { quantity } = currentSize;
  const getQuantities = () => {
    let num;
    const numArray = [];
    if (quantity > 15) {
      num = 15;
    } else {
      num = quantity;
    }
    let i = 1;
    while (i <= num) {
      numArray.push(
        <option value={i} key={i}>{i}</option>,
      );
      i += 1;
    }
    return numArray;
  };
  return (
    <QuantityBox>
      {quantity
        ? (
          <select>
            {getQuantities()}
          </select>
        ) : '-' }
    </QuantityBox>
  );
}

Quantity.propTypes = {
  currentSize: PropTypes.shape({
    quantity: PropTypes.number,
    size: PropTypes.string,
  }),
};

Quantity.defaultProps = {
  currentSize: { quantity: 0 },
};

export default Quantity;
