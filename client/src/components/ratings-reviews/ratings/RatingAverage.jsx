/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingAverage extends React.Component {
  render() {
    let sum = 0;
    let totalRatings = 0;
    let averageRating = 0;

    for (const key in this.props.summary) {
      sum += parseInt(this.props.summary[key] * key);
      totalRatings += parseInt(this.props.summary[key]);
    }

    if (this.props.summary) {
      averageRating = (sum / totalRatings).toFixed(1);
      return (
        <div className="rating-categories">
          <h1>{averageRating} Stars</h1>
        </div>
      );
    } else {
      return (
        <div className="rating-categories">
          <h3>No ratings yet</h3>
        </div>
      );
    }
  }
}

export default RatingAverage;
