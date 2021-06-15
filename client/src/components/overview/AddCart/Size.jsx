import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Size({ skus }) {
  return (
    <SizeSelector>
      <select>
        <option defaultValue="coconut">SELECT SIZE</option>
        <option value="small">Small</option>
      </select>
    </SizeSelector>
  );
}

Size.propTypes = {
  currentStyle: PropTypes.shape({}),
};

Size.defaultProps = {
  currentStyle: {},
};

export default Size;
