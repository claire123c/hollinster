/* eslint-disable no-else-return */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import RatingSummary from './RatingSummary.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
  }

  componentDidMount() {
    axios.get('/reviews/meta/25167')
      .then((response) => {
        this.setState({'metadata': response});
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    // if(this.props.metadata.data) {
      if (this.state.metadata.data) {
      return (
        <div className="ratings">
          <RatingSummary summary={this.state.metadata.data.ratings} />
          {/* <RatingRecommendations />
          <RatingBreakdown /> */}
        </div>
      );
    } else {
      return (
        <div className="ratings">
          <RatingSummary summary={this.state.metadata} />
          {/* <RatingRecommendations />
          <RatingBreakdown /> */}
        </div>
      )
    }
  }
}

export default Ratings;
