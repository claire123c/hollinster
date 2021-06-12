/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ratings">
        <RatingSummary ratingData={this.props} />
        {/* <RatingRecommendations />
        <RatingBreakdown /> */}
      </div>
    );
  }
}

export default Ratings;
