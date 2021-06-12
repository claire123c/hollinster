/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingBreakdown extends React.Component {
  render() {
    if (!this.props.breakdown.Fit && !this.props.breakdown.Length && !this.props.breakdown.Comfort && !this.props.breakdown.Quality) {
      return (
        <>
          <h3>No ratings yet</h3>
          <h5>Be the first to recommend this product!</h5>
        </>
      );
    }

    // for (var key in this.props.breakdown) {
    //   this.props.breakdown.key.value = parseInt(this.props.breakdown.key.value).toFixed(1);
    // }

    if (!this.props.breakdown.Fit) {
      this.props.breakdown.Fit = { value: 'No ratings yet' };
    } else {
      this.props.breakdown.Fit.value = parseInt(this.props.breakdown.Fit.value).toFixed(1);
    }
    if (!this.props.breakdown.Length) {
      this.props.breakdown.Length = { value: 'No ratings yet' };
    } else {
      this.props.breakdown.Length.value = parseInt(this.props.breakdown.Length.value).toFixed(1);
    }
    if (!this.props.breakdown.Comfort) {
      this.props.breakdown.Comfort = { value: 'No ratings yet' };
    } else {
      this.props.breakdown.Comfort.value = parseInt(this.props.breakdown.Comfort.value).toFixed(1);
    }
    if (!this.props.breakdown.Quality) {
      this.props.breakdown.Quality = { value: 'No ratings yet' };
    } else {
      this.props.breakdown.Quality.value = parseInt(this.props.breakdown.Quality.value).toFixed(1);
    }

    return (
      <div className="rating-summary">
        <h3>Ratings</h3>
        <p>Fit: {this.props.breakdown.Fit.value}</p>
        <p>Length: {this.props.breakdown.Length.value}</p>
        <p>Comfort: {this.props.breakdown.Comfort.value}</p>
        <p>Quality: {this.props.breakdown.Quality.value}</p>
      </div>
    );
  }
}

export default RatingBreakdown;
