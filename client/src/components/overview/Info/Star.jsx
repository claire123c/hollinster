import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import averageRating from './Info-helper.jsx/star-helper.jsx';

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

const ReviewsComp = styled.a`
  margin-left: 2%;
  color: black;
`;

function Star({ ratings, results }) {
  const [stars, useStars] = useState(0);
  const [showStars, useShowStars] = useState(false);

  useEffect(() => {
    useStars(averageRating(ratings, useShowStars));
  }, [ratings]);

  return (
    <StarRating className="starrating">
      {showStars
        ? (
          <div>
            <OuterStar className="outerstars">
              &#9734;&#9734;&#9734;&#9734;&#9734;
              <InnerStars className="innerstars" stars={(stars / 5) * 100}>&#9733;&#9733;&#9733;&#9733;&#9733;</InnerStars>
            </OuterStar>
            <ReviewsComp href="#RatingsandReviews">
              {results.length === 1 ? (`Read ${results.length} review`) : (`Read ${results.length} reviews`)}
            </ReviewsComp>
          </div>
        ) : <InnerStars />}
    </StarRating>
  );
}

export default Star;

Star.propTypes = {
  ratings: PropTypes.shape({}),
  results: PropTypes.instanceOf(Array),
};

Star.defaultProps = {
  ratings: {},
  results: [
    {
      review_id: 0,
      rating: 0,
    },
  ],
};
