import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const ThumbnailsGroup = styled.div`
  display: flex;
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 90%;
`;
const AllDefaultView = styled.div`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;
const DefaultView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => (props.src)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
const RightArrow = styled.p`
  font-size: 80px;
  color: ${(props) => (props.rightArrow ? 'rgba(72, 72, 72, 0.7)' : 'rgba(72, 72, 72, 0.0)')};
  padding-left: 50%;
`;
const LeftArrow = styled.p`
  font-size: 80px;
  color: ${(props) => (props.leftArrow ? 'rgba(72, 72, 72, 0.7)' : 'rgba(72, 72, 72, 0.0)')};
  padding-right: 50%;
`;

function Large(props) {
  const { defaultStyle } = props;
  const { photos } = defaultStyle;
  const [currentImgIndex, usecurrentImgIndex] = useState(0);
  const [currentImg, useCurrentImg] = useState(photos[currentImgIndex]);
  const [allImgs, useAllImgs] = useState(photos);
  const [leftClicked, useLeftClicked] = useState(false);
  const [rightClicked, useRightClicked] = useState(false);
  const [leftArrow, useLeftArrow] = useState(false);
  const [rightArrow, useRightArrow] = useState(true);


  useEffect(() => {
    if (photos.length <= 1) {
      useRightArrow(false);
    } else {
      useRightArrow(true);
    }
  }, [props]);

  const leftButtonOnClick = () => {
    if (photos[currentImgIndex - 1] !== undefined) {
      usecurrentImgIndex(currentImgIndex - 1);
      useCurrentImg(photos[currentImgIndex - 1]);
      useLeftClicked(!leftClicked);
      useRightArrow(true);
      if (currentImgIndex === 1) {
        useLeftArrow(false);
      }
    }
  };
  const rightButtonOnClick = () => {
    if (photos[currentImgIndex + 1] !== undefined) {
      usecurrentImgIndex(currentImgIndex + 1);
      useCurrentImg(photos[currentImgIndex + 1]);
      useRightClicked(!rightClicked);
      useLeftArrow(true);
      if (currentImgIndex === photos.length - 2) {
        useRightArrow(false);
      }
    }
  };
  const onClickThu = (current, i) => {
    useCurrentImg(current);
    usecurrentImgIndex(i);
    if (photos.length > 1) {
      if (i === 0) {
        useLeftArrow(false);
        useRightArrow(true);
      } else if (i === photos.length - 1) {
        useLeftArrow(true);
        useRightArrow(false);
      } else {
        useLeftArrow(true);
        useRightArrow(true);
      }
    }
  };

  useEffect(() => {
    usecurrentImgIndex(0);
    useCurrentImg(defaultStyle.photos[0]);
    useAllImgs(photos);
  }, [props]);

  return (
    <ThumbnailsGroup className="thumbnailgroup">
      <Minis minis={allImgs} currentImg={currentImg} onClickThu={onClickThu} leftClicked={leftClicked} rightClicked={rightClicked}/>
      <AllDefaultView className="alldefaultview">
        <DefaultView className="defaultview" src={currentImg.url} alt={defaultStyle.name}>
          <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery" leftArrow={leftArrow}>&#xab;</LeftArrow>
          <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick} rightArrow={rightArrow}>&#xbb;</RightArrow>
        </DefaultView>
      </AllDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.object,
};

Large.defaultProps = {
  defaultStyle: { photos: [''] },
};
