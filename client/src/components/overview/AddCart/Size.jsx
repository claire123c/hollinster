import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;

`;

const SizeHeader = styled.option`

`;

const SizeDropDown = styled.select`

`;

const SizeOptions = styled.option`
`;

function Size({ skus, useCurrentSize, showError }) {
  const getSizes = () => (Object.keys(skus).map((key) => {
    if (skus[key].size) {
      return (
        <SizeOptions value={key} key={key}>
          {skus[key].size}
        </SizeOptions>
      );
    }
    return null;
  }));
  const getCurrentSize = (event) => {
    if (event.target.value !== 'OUT OF STOCK') {
      useCurrentSize(event.target.value);
    }
  };

  return (
    <SizeSelector className="size-selector">
      {showError ? 'Please select size' : ''}
      {Object.keys(skus).length === 0 ? 'OUT OF STOCK'
        : (
          <SizeDropDown onChange={getCurrentSize} data-testid="selector">
            <SizeHeader defaultValue="select">SELECT SIZE</SizeHeader>
            {getSizes()}
          </SizeDropDown>
        )}

    </SizeSelector>
  );
}

Size.propTypes = {
  skus: PropTypes.shape({}),
  useCurrentSize: PropTypes.func,
  showError: PropTypes.bool,
};

Size.defaultProps = {
  skus: {},
  useCurrentSize: () => {},
  showError: false,
};

export default Size;
