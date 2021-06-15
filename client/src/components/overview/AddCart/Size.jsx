import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
`;

function Size({ skus }) {
  console.log(skus);
  return (
    <SizeSelector>
      <select>
        <option defaultValue="select">SELECT SIZE</option>
        {Object.keys(skus).map((key) => {
          if (skus[key].size) {
            return (
              <option value={skus[key].size} key={key}>
                {skus[key].size}
              </option>
            );
          }
        })}
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
