/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingSummary extends React.Component {
  render() {
    if (!this.props.summary['5']) {
      this.props.summary['5'] = '0';
    }
    if (!this.props.summary['4']) {
      this.props.summary['4'] = '0';
    }
    if (!this.props.summary['3']) {
      this.props.summary['3'] = '0';
    }
    if (!this.props.summary['2']) {
      this.props.summary['2'] = '0';
    }
    if (!this.props.summary['1']) {
      this.props.summary['1'] = '0';
    }

    if (this.props.summary) {
      return (
        <div className="rating-categories">
          <p>5 Stars: {this.props.summary['5']}</p>
          <p>4 Stars: {this.props.summary['4']}</p>
          <p>3 Stars: {this.props.summary['3']}</p>
          <p>2 Stars: {this.props.summary['2']}</p>
          <p>1 Star: {this.props.summary['1']}</p>
        </div>
      );
    } else {
      return (
        <div className="rating-categories">
          <h5>Be the first to rate this product</h5>
        </div>
      );
    }
  }
}

export default RatingSummary;
