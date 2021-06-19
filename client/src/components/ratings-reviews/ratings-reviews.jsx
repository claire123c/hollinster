/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Ratings from './ratings/Ratings.jsx';
import Reviews from './reviews/Reviews.jsx';

class RatingsReviews extends React.Component {
  render() {
    return (
      <div className="ratings-reviews-header">
        <a name="ratings-reviews"/>
        <h3>RATINGS & REVIEWS</h3>
        <div className="ratings-reviews">
          <Ratings productID={this.props.productID} />
          <Reviews productID={this.props.productID} />
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
