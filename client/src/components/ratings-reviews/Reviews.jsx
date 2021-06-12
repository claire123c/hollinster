/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

// const getReviews = (review) => (<ReviewElement review={review}/>);

class Reviews extends React.Component {
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
    return (
      <>
        <ReviewList reviews={this.state.data} />
      </>
    );
  }
}

export default Reviews;
