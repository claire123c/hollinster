/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import ReviewPics.jsx from './ReviewPics.jsx';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    let recommendation;
    if (this.props.review.recommend) {
      recommendation = "Recommended"
    } else {
      recommendation = "Not Recommended"
    }

    return (
      <div className="review-item-div">
        <h3>Rating: {this.props.review.rating} Stars out of 5</h3>
        <h4>Review: {this.props.review.body}</h4>
        <h4>Recommendation: {recommendation}</h4>
        <p>Reviewer Name: {this.props.review.reviewer_name}</p>
        <p>Date: {this.props.review.date}</p>
        <p>Review ID: {this.props.review.review_id}</p>
        {/* Add code here to render pics */}
      </div>
    );
  }
}

export default ReviewItem;
