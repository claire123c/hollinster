/* eslint-disable arrow-body-style */
/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingBreakdown extends React.Component {
  render() {
    console.log(Object.entries(this.props.breakdown));

    const ratingItemsArray = Object.entries(this.props.breakdown);

    const getRatingItems = ratingItemsArray.map((item) => {
      return (
        <p>{`${item[0]}: ${Number(item[1].value).toFixed(1)}`}</p>
        // <p>{item[0]}: {item[1]}</p>
      );
    });

    if (!this.props.breakdown) {
      return (
        <>
          <h3>No ratings yet</h3>
          <h5>Be the first to recommend this product!</h5>
        </>
      );
    } else {
      return (
        <div className="rating-summary">
          <h3>Ratings</h3>
          {getRatingItems}
        </div>
      );
    }

    // const getRatings = () => {
    //   for (var key in this.props.breakdown) {
    //     this.props.breakdown.key.value = parseInt(this.props.breakdown.key.value).toFixed(1);
    //   }
    // }

    // Object.keys(this.props.breakdown).map(function(key, index) {
    //   myObject[key].value *= 2;
    // });

    // if (!this.props.breakdown.Fit) {
    //   this.props.breakdown.Fit = { value: 'No ratings yet' };
    // } else {
    //   this.props.breakdown.Fit.value = parseInt(this.props.breakdown.Fit.value).toFixed(1);
    // }
    // if (!this.props.breakdown.Length) {
    //   this.props.breakdown.Length = { value: 'No ratings yet' };
    // } else {
    //   this.props.breakdown.Length.value = parseInt(this.props.breakdown.Length.value).toFixed(1);
    // }
    // if (!this.props.breakdown.Comfort) {
    //   this.props.breakdown.Comfort = { value: 'No ratings yet' };
    // } else {
    //   this.props.breakdown.Comfort.value = parseInt(this.props.breakdown.Comfort.value).toFixed(1);
    // }
    // if (!this.props.breakdown.Quality) {
    //   this.props.breakdown.Quality = { value: 'No ratings yet' };
    // } else {
    //   this.props.breakdown.Quality.value = parseInt(this.props.breakdown.Quality.value).toFixed(1);
    // }
  }
}

export default RatingBreakdown;
