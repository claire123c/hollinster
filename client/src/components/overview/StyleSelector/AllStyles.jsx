import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleText = styled.span`
  font-weight: bold;
  margin-right: 2%;
`;

const StyleThumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  max-width: 350px;
`;

const AllStylesComp = styled.div`
  max-height: 100%;
  max-width: 100%;
`;

function AllStyles({ styleData, currentStyle }) {
  const { name, style_id } = currentStyle;

  return (
    <AllStylesComp>
      <div>
        <StyleText>
          STYLE
          {' '}
          {'>'}
        </StyleText>
        {name.toUpperCase()}
      </div>
      <StyleThumbnails>
        {styleData.map((style) => (
          <StyleThumbnail style={style} key={style.style_id} current={style_id} />
        ))}
      </StyleThumbnails>
    </AllStylesComp>
  );
}

export default AllStyles;

AllStyles.propTypes = {
  styleData: PropTypes.instanceOf(Array),
  currentStyle: PropTypes.instanceOf(Object),
};

AllStyles.defaultProps = {
  styleData: [],
  currentStyle: { name: '' },
};
