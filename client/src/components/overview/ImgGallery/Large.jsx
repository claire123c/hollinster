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
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;;
  max-width: 80%;
  min-height: 100%;
  min-width: 80%;

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
const RightArrow = styled.img`
  font-size: 80px;
  visibility: ${(props) => (props.rightArrow ? 'visible' : 'hidden')};
  padding-left: 50%;
`;
const LeftArrow = styled.img`
  font-size: 80px;
  visibility: ${(props) => (props.leftArrow ? 'visible' : 'hidden')};
  padding-right: 50%;
`;

function Large(props) {
  const { defaultStyle } = props;
  const { photos } = defaultStyle;
  const [currentImgIndex, usecurrentImgIndex] = useState(0);
  const [currentImg, useCurrentImg] = useState(photos ? photos[currentImgIndex] : { url: '' });
  const [allImgs, useAllImgs] = useState(photos);
  const [leftClicked, useLeftClicked] = useState(false);
  const [rightClicked, useRightClicked] = useState(false);
  const [leftArrow, useLeftArrow] = useState(false);
  const [rightArrow, useRightArrow] = useState(true);

  useEffect(() => {
    if (photos && photos.length <= 1) {
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
    useCurrentImg(photos ? photos[0] : { url: '' });
    useAllImgs(photos);
  }, [props]);

  return (
    <ThumbnailsGroup className="thumbnailgroup">
      <Minis minis={allImgs} currentImg={currentImg} onClickThu={onClickThu} leftClicked={leftClicked} rightClicked={rightClicked} />
      <AllDefaultView className="alldefaultview">
        <DefaultView className="default-view" src={currentImg.url} alt={defaultStyle.name}>
          <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery" leftArrow={leftArrow} src="./assets/left-arrow.png" />
          <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick} rightArrow={rightArrow} src="./assets/right-arrow.png" />
        </DefaultView>
      </AllDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.shape({
    'default?': PropTypes.bool,
    name: PropTypes.string,
    photos: PropTypes.instanceOf(Array),
  }),
};

Large.defaultProps = {
  defaultStyle: { photos: [''] },
};
