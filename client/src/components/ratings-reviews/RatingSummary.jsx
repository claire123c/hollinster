import React from 'react';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rating-summary">
        <h3>Rating Summary</h3>
        {/* <RatingSummary allRatings={props.ratings.data.ratings} allRecommendations={props.ratings.data.recommended}/> */}
        {/* <p>5 Star Ratings: {this.props.ratingData.ratings.data.ratings[5]}</p> */}
        <p>4 Star Ratings: </p>
        <p>3 Star Ratings: </p>
        <p>2 Star Ratings: </p>
        <p>1 Star Ratings: </p>
      </div>
    );
  }
}

export default RatingSummary;
