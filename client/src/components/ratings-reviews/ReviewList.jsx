/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import ReviewItem from './ReviewItem.jsx'

// const getReviews = (review) => (<ReviewElement review={review}/>);

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'data': [{'body': 1}]};
  }

  componentDidMount() {
    axios.get('/reviews/25167')
      .then((response) => {
        this.setState({'data': response.data.results});
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    const reviewList = this.state.data.map((review) => (
      // <li key={review.review_id}>{review.review_id}</li>
      <ReviewItem key={review.review_id} review={review} />
    ));

    return (
      <>
        {/* <h1>{this.state.data[0].body}</h1> */}
        {/* <h1>{reviewList}</h1> */}
        {reviewList}
      </>
    );
  }
}

export default ReviewList;
