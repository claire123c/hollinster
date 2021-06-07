import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const DefaultView = styled.img`
  height: 100%;
`;

const ThumbnailsGroup = styled.div`
  display: flex;
`;

const CenterDefaultView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightArrow = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 8px;
  background-color: transparent;
  height: 12px;
  width: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-left: 1px solid rgba(0, 0, 0, 0);
  transform: translateX(25%) rotate(45deg);
`;

const LeftArrow = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 8px;
  background-color: transparent;
  height: 12px;
  width: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0);
  border-right: 1px solid rgba(0, 0, 0, 0);
  transform: translateX(25%) rotate(45deg);
`;

function Large({ defaultStyle }) {
  const { photos } = defaultStyle;
  const [currentImg, useCurrentImg] = useState(photos[0]);
  const [allImgs, useOtherImgs] = useState(photos);

  const leftButtonOnClick = () => {
    console.log(1);
  };
  const rightButtonOnClick = () => {
    console.log(1);
  };

  return (
    <ThumbnailsGroup>
      <Minis minis={allImgs} currentImg={currentImg} />
      <CenterDefaultView>
        <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery" />
        <DefaultView src={currentImg.url} alt={defaultStyle.name} />
        <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick} />
      </CenterDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.object,
};