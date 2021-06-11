/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  render(props) {
    let recommendation;
    if (this.props.review.recommend) {
      recommendation = "Recommended"
    } else {
      recommendation = "Not Recommended"
    }

    return (
      <div className="review-div">
        <h3>Rating: {this.props.review.rating} Stars out of 5</h3>
        <h4>Review: {this.props.review.body}</h4>
        <h4>Recommendation: {recommendation}</h4>
        <p>Reviewer Name: {this.props.review.reviewer_name}</p>
        <p>Date: {this.props.review.date}</p>
        <p>Review ID: {this.props.review.review_id}</p>
      </div>
    );
  }
}

export default ReviewItem;
