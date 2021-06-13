/* eslint-disable no-else-return */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.metadata.data) {
      return (
        <div className="ratings">
          <RatingSummary summary={this.props.metadata.data.ratings} />
          {/* <RatingRecommendations />
          <RatingBreakdown /> */}
        </div>
      );
    } else {
      return (
        <div className="ratings">
          <RatingSummary summary={this.props.metadata} />
          {/* <RatingRecommendations />
          <RatingBreakdown /> */}
        </div>
      )
    }
  }
}

export default Ratings;
