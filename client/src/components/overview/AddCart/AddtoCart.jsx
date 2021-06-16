import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddtoBag = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function AddtoCart(props) {
  return (
    <AddtoBag>
      ADD TO BAG
      <span> &#x2b;</span>
    </AddtoBag>
  );
}

export default AddtoCart;
