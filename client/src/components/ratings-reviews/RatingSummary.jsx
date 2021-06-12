/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.summary['5']) {
      this.props.summary['5'] = '0'
    }
    if (!this.props.summary['4']) {
      this.props.summary['4'] = '0'
    }
    if (!this.props.summary['3']) {
      this.props.summary['3'] = '0'
    }
    if (!this.props.summary['2']) {
      this.props.summary['2'] = '0'
    }
    if (!this.props.summary['1']) {
      this.props.summary['1'] = '0'
    }

    let fiveStars = parseInt(this.props.summary['5']);
    let fourStars = parseInt(this.props.summary['4']);
    let threeStars = parseInt(this.props.summary['3']);
    let twoStars = parseInt(this.props.summary['2']);
    let oneStars = parseInt(this.props.summary['1']);
    let totalRatings = fiveStars + fourStars + threeStars + twoStars + oneStars;
    let averageRating = (((fiveStars * 5) + (fourStars * 4) + (threeStars * 3) + (twoStars * 2) + (oneStars)) / totalRatings).toFixed(1);

    return (
      <div className="rating-summary">
        <h3>Rating Summary</h3>
        <p>5 Stars: {this.props.summary['5']}</p>
        <p>4 Stars: {this.props.summary['4']}</p>
        <p>3 Stars: {this.props.summary['3']}</p>
        <p>2 Stars: {this.props.summary['2']}</p>
        <p>1 Star: {this.props.summary['1']}</p>
        <p>Average Rating: {averageRating} Stars</p>
      </div>
    );
  }
}

export default RatingSummary;
