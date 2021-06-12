import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Freeform({ productInfo }) {
  const { name, category } = productInfo;
  console.log(productInfo);

  return (
    <div>hihi</div>
  );
}

export default Freeform;

Freeform.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
  }),
};

Freeform.defaultProps = {
  productInfo: {},
};
