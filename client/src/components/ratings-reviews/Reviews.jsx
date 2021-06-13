/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';

// const getReviews = (review) => (<ReviewElement review={review}/>);

class Reviews extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {'data': [{'body': 1, 'review_id': 0}]};
=======
    this.state = {
      data: [{ body: 1, review_id: 0 }],
      metadata: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
>>>>>>> main
  }

  componentDidMount() {
    axios.get('/reviews/25167')
      .then((response) => {
        this.setState({'data': response.data.results});
      })
      .catch((error) => {
        console.log('error', error);
      });

    axios.get('/reviews/meta/25167')
      .then((response) => {
        this.setState({'metadata': response});
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div className="reviews">
        <Ratings metadata={this.state.metadata} />
        <ReviewList reviews={this.state.data} />
      </div>
    );
  }
}

export default Reviews;
