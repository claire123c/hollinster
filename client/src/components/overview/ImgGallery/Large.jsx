import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const ThumbnailsGroup = styled.div`
  display: flex;
`;
const CenterDefaultView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DefaultView = styled.div`
  max-width: 100%;
  max-height: 100%;
`;
const DefaultImg = styled.img`
  max-width: 450;
  max-height: 722;
`;
const RightArrow = styled.p`
  font-size: 40px;
  padding: 5%;
`;
const LeftArrow = styled.p`
  font-size: 40px;
  padding: 5%;
`;

function Large(props) {
  const { defaultStyle } = props;
  const { photos } = defaultStyle;
  const [currentImgIndex, usecurrentImgIndex] = useState(0);
  const [currentImg, useCurrentImg] = useState(photos[currentImgIndex]);
  const [allImgs, useAllImgs] = useState(photos);

  const leftButtonOnClick = () => {
    if (photos[currentImgIndex - 1] !== undefined) {
      usecurrentImgIndex(currentImgIndex - 1);
      useCurrentImg(photos[currentImgIndex - 1]);
    }
  };
  const rightButtonOnClick = () => {
    if (photos[currentImgIndex + 1] !== undefined) {
      usecurrentImgIndex(currentImgIndex + 1);
      useCurrentImg(photos[currentImgIndex + 1]);
    }
  };
  const onClickThumb = (current, i) => {
    useCurrentImg(current);
    usecurrentImgIndex(i);
  };

  useEffect(() => {
    usecurrentImgIndex(0);
    useCurrentImg(defaultStyle.photos[0]);
    useAllImgs(photos);
  }, [props]);

  return (
    <ThumbnailsGroup>
      <Minis minis={allImgs} currentImg={currentImg} onClickThumb={onClickThumb} />
      <CenterDefaultView className="alldefaultview">
        <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery">&#8592;</LeftArrow>
        <DefaultView className="defaultview">
          <DefaultImg src={currentImg.url} alt={defaultStyle.name} />
        </DefaultView>
        <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick}>&#8594;</RightArrow>
      </CenterDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.object,
};