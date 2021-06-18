import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityBox = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;

`;

const QuantityDropDown = styled.select`

`;

function Quantity({ currentSizeObj }) {
  const { quantity } = currentSizeObj;
  const [isOpenQ, setIsOpenQ] = useState(false);
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

  if (!quantity) {
    return (
      <QuantityBox>
        -
      </QuantityBox>
    );
  }
  return (
    <QuantityBox>
      <QuantityDropDown className="quantity-selector">
        {getQuantities()}
      </QuantityDropDown>
    </QuantityBox>
  );
}

Quantity.propTypes = {
  currentSizeObj: PropTypes.shape({
    quantity: PropTypes.number,
    size: PropTypes.string,
  }),
};

Quantity.defaultProps = {
  currentSizeObj: { quantity: 0 },
};

export default Quantity;
