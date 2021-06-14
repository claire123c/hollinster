/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Star from '../../overview/Info/Star.jsx';

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
      // let starRating = averageRating;
      // starRating = (Math.round(starRating * 4) / 4).toFixed(2).toString();
      // console.log(typeof starRating);

      // const starDivStyle = {
      //   --rating: starRating
      // }

      // if (starRating) {
      return (
        <div className="rating-categories">
          <div className="average-rating">
            <h1>{averageRating}</h1>
            <Star ratings={this.props.summary} results={[{ display: 'none' }]} />
          </div>
        </div>
      );
      // }
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
