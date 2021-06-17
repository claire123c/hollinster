import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24em;
  height: 36em;
  margin: 1em;
  user-select: none;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export default function AddToOutfit( {addToOutfit} ) {
  return (
    <CardWrapper onClick={addToOutfit}>
      +
    </CardWrapper>
  );
}
