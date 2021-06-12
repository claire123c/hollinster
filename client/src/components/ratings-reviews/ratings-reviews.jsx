/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Ratings from './ratings/Ratings.jsx';
import Reviews from './reviews/Reviews.jsx';

class RatingsReviews extends React.Component {
  render() {
    return (
      <div className="ratings-reviews">
        <h3>RATINGS & REVIEWS</h3>
        <Ratings productID={this.props.productID} />
        <Reviews productID={this.props.productID} />
      </div>
    );
  }
}

export default RatingsReviews;
