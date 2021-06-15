import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import AddtoCart from './AddtoCart.jsx';
import StarCart from './StarCart.jsx';

const CartFormat = styled.div`
  display: flex;
`;

function Cart({ currentStyle }) {
  const { skus } = currentStyle;
  const [currentSize, useCurrentSize] = useState();
  console.log(skus);

  return (
    <div>
      <CartFormat>
        <Size skus={skus} />
        <Quantity />
      </CartFormat>
      <CartFormat>
        <AddtoCart />
        <StarCart />
      </CartFormat>
    </div>
  );
}

Cart.propTypes = {
  currentStyle: PropTypes.shape({
    skus: PropTypes.shape({}),
  }),
};

Cart.defaultProps = {
  currentStyle: {},
};

export default Cart;
