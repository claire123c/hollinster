import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleText = styled.span`
  font-weight: bold;
`;

const StyleThumbnails = styled.div`
  display: flex;
`;

function AllStyles({ styleData }) {

  console.log(styleData);
  return (
    <div>
      <div>
        <StyleText>
          STYLE
          {' '}
          {'>'}
        </StyleText>
        {' '}
        SELECTED STYLE
      </div>
      <StyleThumbnails>
        {styleData.map((style) => (
          <StyleThumbnail style={style} key={style.style_id} />
        ))}
      </StyleThumbnails>
    </div>
  );
}

export default AllStyles;

AllStyles.propTypes = {
  styleData: PropTypes.instanceOf(Array),
};

AllStyles.defaultProps = {
  styleData: [],
};
