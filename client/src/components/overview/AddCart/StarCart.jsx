import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarBox = styled.div`
  border: 1px solid black;
  margin: auto;
  padding: 3.3% 4%;
  text-align: center;
`;

function StarCart(props) {
  return (
    <StarBox>
      &#9734;
    </StarBox>
  );
}

export default StarCart;
