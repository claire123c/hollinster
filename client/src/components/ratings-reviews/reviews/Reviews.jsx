/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:client/src/components/ratings-reviews/Reviews.jsx
=======
    this.state = {'data': [{'body': 1, 'review_id': 0}]};
>>>>>>> main:client/src/components/ratings-reviews/reviews/Reviews.jsx
    this.state = {
      data: [{ body: 1, review_id: 0 }],
    };
  }

  componentDidMount() {
    axios.get('/reviews/' + this.props.productID)
      .then((response) => {
        this.setState({'data': response.data.results});
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div className="reviews">
        <ReviewList reviews={this.state.data} />
      </div>
    );
  }
}

export default Reviews;
