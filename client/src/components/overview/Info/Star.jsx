import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerStars = styled.div`
  display: inline-block;
`;

const OuterStar = styled.div`
  display: inline-block;
  position: relative;
`;

function Star({ reviews }) {
  const { results } = reviews;
  const [stars, useStars] = useState('');
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
      return ratings / totalRatings;
    }
    useShowStars(false);
    return 'No rating';
  };

  useEffect(() => {
    useStars(averageRating(results));
  }, [results]);

  return (
    <div className="starrating">
      {showStars
        ? (
          <InnerStars>
            &#9734;
            <OuterStar>&#9733;</OuterStar>
          </InnerStars>
        ) : <InnerStars />}
      <p className="stars">{stars}</p>
    </div>
  );
}

export default Star;
