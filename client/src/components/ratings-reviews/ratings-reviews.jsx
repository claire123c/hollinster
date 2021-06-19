/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Ratings from './ratings/Ratings.jsx';
import Reviews from './reviews/Reviews.jsx';

const RatingsReviews = ({ productID }) => (
  <div className="ratings-reviews-header">
    <h3>RATINGS & REVIEWS</h3>
    <div className="ratings-reviews">
      <Ratings productID={productID} />
      <Reviews productID={productID} />
    </div>
  </div>
);

// class RatingsReviews extends React.Component {
//   render() {

//   }
// }

export default RatingsReviews;
