/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingRecommendations extends React.Component {
  render() {
    const positiveRecs = parseInt(this.props.recommendations.true);
    const negativeRecs = parseInt(this.props.recommendations.false);
    const totalRecommendations = positiveRecs + negativeRecs;

    if (totalRecommendations > 0) {
      const averageRecommendation = (positiveRecs / totalRecommendations) * 100;
      return (
        <div className="rating-summary">
          <div>
            <h3>{averageRecommendation}% of users</h3>
            <h5>recommend this product</h5>
          </div>
          <div>
            <p>Recommend: {this.props.recommendations.true}</p>
            <p>Do not recommend: {this.props.recommendations.false}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="rating-summary">
          <h3>No ratings yet</h3>
          <h5>Be the first to rate this product</h5>
        </div>
      );
    }
  }
}

export default RatingRecommendations;
