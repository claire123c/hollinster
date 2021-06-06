import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const DefaultView = styled.img`
  height: 55%;
  background-color: silver;
`;

const ThumbnailsGroup = styled.div`
  display: flex;
  height: 80%;
`;


function Large(props) {
  const { defaultStyle: [firstStyle] } = props;
  const { photos } = firstStyle;
  const [currentImg, useCurrentImg] = useState(photos[0]);
  const [otherImgs, useOtherImgs] = useState(photos.filter((img) => (
    img.url !== currentImg.url
  )));

  return (
    <ThumbnailsGroup>
      <Minis minis={otherImgs} />
      <button type="button">Left</button>
      <DefaultView src={currentImg.url} alt={firstStyle.name} />
      <button type="button">Right</button>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.array
};