import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Size({ skus, useCurrentSize }) {
  const getSizes = () => (Object.keys(skus).map((key) => {
    if (skus[key].size) {
      return (
        <option value={key} key={key}>
          {skus[key].size}
        </option>
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
      {Object.keys(skus).length === 0 ? 'OUT OF STOCK'
        : (
          <select onChange={getCurrentSize} data-testid="selector">
            <option defaultValue="select">SELECT SIZE</option>
            {getSizes()}
          </select>
        )}

    </SizeSelector>
  );
}

Size.propTypes = {
  skus: PropTypes.shape({}),
  useCurrentSize: PropTypes.func,
};

Size.defaultProps = {
  skus: {},
  useCurrentSize: () => {},
};

export default Size;
