import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star.jsx';

const ProductInfo = styled.div`
`;

const Category = styled.div`
  margin-top: 2%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 40px;
`;

const Price = styled.div`
  margin-top: 4%;
  margin-bottom: 6%;
`;

const SalePrice = styled.div`
  display: inline;
  color: red;
  margin-right: 1%;
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

function Info({
  productInfo, styles, meta, reviews,
}) {
  const { name, category } = productInfo;
  const { original_price, sale_price } = styles;
  const { ratings } = meta;
  const { results } = reviews;

  return (
    <ProductInfo className="productinfo">
      <Star ratings={ratings} results={results} />
      <Category className="category">
        {category ? category.toUpperCase() : category}
      </Category>
      <Name className="name">{name}</Name>
      <div className="price">
        {sale_price ? (
          <Price>
            <SalePrice className="sales">
              $
              {sale_price}
            </SalePrice>
            <Original className="original">
              $
              {original_price}
            </Original>
          </Price>
        ) : (
          <Price>
            $
            {original_price}
          </Price>
        )}
      </div>
      <Social>
        <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Share</a></div>
        <a href="https://twitter.com/Cpak90?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @Cpak90</a>
        <Pin className="pinterest-save-button">
          <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" />
        </Pin>
      </Social>
    </ProductInfo>
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
    category: PropTypes.string,
  }),
  meta: PropTypes.shape({
    ratings: PropTypes.shape({
      3: PropTypes.string,
    }),
  }),
  reviews: PropTypes.shape({
    product: PropTypes.string,
    results: PropTypes.instanceOf(Array),
  }),
};

Info.defaultProps = {
  styles: {},
  productInfo: {},
  meta: {
    ratings: {
    },
  },
  reviews: {
    product: '',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 0,
        rating: 0,
      },
    ],
  },
};
