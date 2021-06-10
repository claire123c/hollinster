import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Star(props) {

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;
    if (reviewResults.length === 0) {
      return 'No Rating Available';
    }
    for (let i = 0; i < reviewResults.length; i += 1) {
      if (reviewResults[i].rating !== undefined) {
        ratings += reviewResults[i].rating;
        totalRatings += 1;
      }
    }
    return ratings / totalRatings;
  };

  return (
    <div className="starrating">
      hi
    </div>
  );
}

export default Star;
