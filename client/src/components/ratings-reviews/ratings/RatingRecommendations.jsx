/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingRecommendations extends React.Component {
  render() {
    const positiveRecs = parseInt(this.props.recommendations.true);
    const negativeRecs = parseInt(this.props.recommendations.false);
    const totalRecommendations = positiveRecs + negativeRecs;

    if (totalRecommendations > 0) {
      const averageRecommendation = Number((positiveRecs / totalRecommendations) * 100).toFixed(0);
      return (
        <div className="rating-categories recommend-tooltip">
          <p>{averageRecommendation}% of reviews recommend this product</p>
          <span className="recommend-tooltiptext">
            Recommend: {this.props.recommendations.true}
            <br />
            Do not recommend: {this.props.recommendations.false}
          </span>
          {/* <span class="recommend-tooltiptext">Do not recommend: {this.props.recommendations.false}</span> */}
        </div>
      );
    } else {
      return (
        <div className="rating-categories">
          <h3>No recommendations yet</h3>
          <h5>Be the first to rate this product</h5>
        </div>
      );
    }
  }
}

export default RatingRecommendations;
