import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityBox = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Quantity(props) {
  return (
    <QuantityBox>
      1
    </QuantityBox>
  );
}

export default Quantity;
