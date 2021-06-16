import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const AddtoBag = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function AddtoCart(props) {

  const addItem = (item) => {
    axios.post('/cart', item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <AddtoBag>
      ADD TO BAG
      <span> &#x2b;</span>
    </AddtoBag>
  );
}

export default AddtoCart;
