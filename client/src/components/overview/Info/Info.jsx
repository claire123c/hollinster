import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star.jsx';

function Info({ productInfo, styles, reviews }) {
  const { name, category } = productInfo;
  const { original_price, sale_price} = styles;
  return (
    <div className="productinfo">
      <Star reviews={reviews} />
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="price">
        {sale_price ? sale_price : original_price}
      </div>
    </div>
  );
}

export default Info;

Info.propTypes = {
  styles: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
  }),
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
  }),
  reviews: PropTypes.shape({
    count: PropTypes.number,
    page: PropTypes.number,
    product: PropTypes.string,
  }),
};

Info.defaultProps = {
  styles: {},
  productInfo: {},
  reviews: {},
};
