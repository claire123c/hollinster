/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import RatingSummary from './RatingSummary.jsx';
import RatingRecommendations from './RatingRecommendations.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      recommended: { false: 0, true: 0 },
      breakdown: {
        "Fit": {
          "id": "00001",
          "value": "0"
        },
        "Length": {
          "id": "00002",
          "value": "0"
        },
        "Comfort": {
          "id": "00003",
          "value": "0"
        },
        "Quality": {
          "id": "00004",
          "value": "0"
        }
      }
    };
  }

  componentDidMount() {
    axios.get('/reviews/meta/' + this.props.productID)
      .then((response) => {
        this.setState({ ratings: response.data.ratings, recommended: response.data.recommended, breakdown: response.data.characteristics });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div className="ratings">
        <RatingSummary summary={this.state.ratings} />
        <RatingRecommendations recommendations={this.state.recommended} />
        <RatingBreakdown breakdown={this.state.breakdown} />
      </div>
    );
  }
}

export default Ratings;
