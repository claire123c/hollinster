import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeartComp = styled.div`
  border: 1px solid black;
  margin-left: 5%;
  padding: 3.4% 4%;
  text-align: center;
  width: 5%;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: red;
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

const HeartImg = styled.img`
  height: calc(2vh);
  width: calc(2vh);
  color: yellow;
`;

function Heart(props) {
  return (
    <HeartComp>
      <HeartImg src="./assets/heart.png" alt="heart" />
    </HeartComp>
  );
}

export default Heart;
