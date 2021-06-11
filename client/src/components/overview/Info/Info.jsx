import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star.jsx';

function Info({ productInfo, styles, reviews }) {
  const { name, category } = productInfo;
  const [defaultStyle] = styles;
  const { original_price, sale_price} = defaultStyle;
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
  styles: PropTypes.array,
  productInfo: PropTypes.object,
  name: PropTypes.string,
  category: PropTypes.string,
  default_price: PropTypes.string,
  reviews: PropTypes.object,
};
