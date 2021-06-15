import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Size(props) {
  return (
    <SizeSelector>
      SELECT SIZE
    </SizeSelector>
  );
}

export default Size;
