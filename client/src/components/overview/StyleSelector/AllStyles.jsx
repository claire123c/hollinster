import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleText = styled.span`
  font-weight: bold;
`;

const StyleThumbnails = styled.div`
  display: flex;
  max-height: 100%;
  max-width: 100%;
`;

const AllStylesComp = styled.div`
  max-height: 100%;
  max-width: 100%;
`;

function AllStyles({ styleData }) {
  return (
    <AllStylesComp>
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
    </AllStylesComp>
  );
}

export default AllStyles;

AllStyles.propTypes = {
  styleData: PropTypes.instanceOf(Array),
};

AllStyles.defaultProps = {
  styleData: [],
};
