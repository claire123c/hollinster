import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star.jsx';

const SalePrice = styled.div`
  display: inline;
  color: red;
`;
const Original = styled.div`
  display: inline;
  text-decoration: line-through;
`;

const Social = styled.div`
  height: 30px;
`;

const Pin = styled.div`
  display: inline;
  vertical-align: top;
`;

function Info({ productInfo, styles, reviews }) {
  const { name, category } = productInfo;
  const { original_price, sale_price } = styles;

  return (
    <div className="productinfo">
      <Star reviews={reviews} />
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="price">
        {sale_price ? (
          <div>
            <SalePrice className="sales">
              $
              {sale_price}
            </SalePrice>
            <Original className="original">
              $
              {original_price}
            </Original>
          </div>
        ) : original_price}
      </div>
      <Social>
        <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Share</a></div>
        <a href="https://twitter.com/Cpak90?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @Cpak90</a>
        <Pin>
          <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" />
        </Pin>
      </Social>
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
