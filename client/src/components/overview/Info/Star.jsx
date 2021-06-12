import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => (props.stars)}%;
  color: rgb(255,196,12);
`;

const OuterStar = styled.div`
  display: inline-block;
  position: relative;
  color: rgb(255,196,12);
`;

const StarRating = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`;

function Star({ reviews }) {
  const { results } = reviews;
  const [stars, useStars] = useState(0);
  const [showStars, useShowStars] = useState(false);

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;

    if (reviewResults && reviewResults.length !== 0) {
      for (let i = 0; i < reviewResults.length; i += 1) {
        if (reviewResults[i].rating !== undefined) {
          ratings += reviewResults[i].rating;
          totalRatings += 1;
        }
      }
      useShowStars(true);
      return Math.round((ratings / totalRatings) * 4) / 4;
    }
    useShowStars(false);
    return 0;
  };

  useEffect(() => {
    useStars(averageRating(results));
  }, [results]);

  return (
    <StarRating className="starrating">
      {showStars
        ? (
          <div>
            <OuterStar className="outerstars">
              &#9734;&#9734;&#9734;&#9734;&#9734;
              <InnerStars className="innerstars" stars={(stars / 5) * 100}>&#9733;&#9733;&#9733;&#9733;&#9733;</InnerStars>
            </OuterStar>
            <a href="#RatingsandReviews">
              {results.length === 1 ? (`Read ${results.length} review`) : (`Read ${results.length} reviews`)}
            </a>
          </div>
        ) : <InnerStars />}
    </StarRating>
  );
}

export default Star;

Star.propTypes = {
  reviews: PropTypes.object,
};