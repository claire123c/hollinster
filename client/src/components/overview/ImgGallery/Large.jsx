import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const DefaultView = styled.img`
  height: 700;
`;

const ThumbnailsGroup = styled.div`
  display: flex;
`;

const CenterDefaultView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightArrow = styled.p`
  font-size: 40px;
  padding: 5%;
`;
const LeftArrow = styled.p`
  font-size: 40px;
  padding: 5%;
`;

function Large({ defaultStyle }) {
  const { photos } = defaultStyle;
  let currentImgIndex = 0;
  const [currentImg, useCurrentImg] = useState(photos[currentImgIndex]);
  const [allImgs, useOtherImgs] = useState(photos);

  const leftButtonOnClick = () => {
  };
  const rightButtonOnClick = () => {
    currentImgIndex += 1;
    if (photos[currentImgIndex] !== undefined) {
      useCurrentImg(photos[currentImgIndex]);
      useOtherImgs(photos);
    }
  };
  console.log(currentImg.url);

  return (
    <ThumbnailsGroup>
      <Minis minis={allImgs} currentImg={currentImg} />
      <CenterDefaultView className="alldefaultview">
        <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery">&#8592;</LeftArrow>
        <DefaultView className="defaultview" src={currentImg.url} alt={defaultStyle.name} />
        <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick}>&#8594;</RightArrow>
      </CenterDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.object,
};