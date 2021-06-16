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
  console.log(currentSize);
  const getQuantities = () => {
    let num;
    let numArray = [];
    if (quantity > 15) {
      num = 15;
    } else {
      num = quantity;
    }
    let i = 0;
    while (i < num) {
      numArray.push(
        <option value={num} key={num}>{num}</option>,
      );
      i += 1;
    }
    console.log(numArray, 'hiasdf');
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
