/* eslint-disable no-else-return */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReviewItem from './ReviewItem.jsx';

// const getReviews = (review) => (<ReviewElement review={review}/>);

class ReviewList extends React.Component {
  render() {
    if (this.props.reviews.length > 0) {
      const reviewList = this.props.reviews.map((review) => (
        // <li key={review.review_id}>{review.review_id}</li>
        <ReviewItem key={review.review_id} review={review} />
      ));

      return (
        <div className="review-list">
          {/* <h1>{this.state.data[0].body}</h1> */}
          {/* <h1>{reviewList}</h1> */}
          {reviewList}
        </div>
      );
    } else {
      return (
        <div className="rating-categories">
          <h3>No reviews yet</h3>
          <h5>Be the first to review this product</h5>
        </div>
      );
    }
  }
}

export default ReviewList;
