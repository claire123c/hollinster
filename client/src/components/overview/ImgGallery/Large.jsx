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
  &:hover {
    cursor: pointer;
  }
`;
const LeftArrow = styled.img`
  font-size: 80px;
  visibility: ${(props) => (props.leftArrow ? 'visible' : 'hidden')};
  padding-right: 50%;
  &:hover {
    cursor: pointer;
  }
`;

function Large(props) {
  const { defaultStyle } = props;
  const { photos } = defaultStyle;
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(photos ? photos[currentImgIndex] : { url: '' });
  const [allImgs, setAllImgs] = useState(photos);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);

  useEffect(() => {
    if (photos && photos.length === 1) {
      setRightArrow(false);
    } else {
      setRightArrow(true);
      setLeftArrow(false);
    }
  }, [props]);

  const leftButtonOnClick = () => {
    if (photos[currentImgIndex - 1] !== undefined) {
      setCurrentImgIndex(currentImgIndex - 1);
      setCurrentImg(photos[currentImgIndex - 1]);
      setLeftClicked(!leftClicked);
      setRightArrow(true);
      if (currentImgIndex === 1) {
        setLeftArrow(false);
      }
    }
  };
  const rightButtonOnClick = () => {
    if (photos[currentImgIndex + 1] !== undefined) {
      setCurrentImgIndex(currentImgIndex + 1);
      setCurrentImg(photos[currentImgIndex + 1]);
      setRightClicked(!rightClicked);
      setLeftArrow(true);
      if (currentImgIndex === photos.length - 2) {
        setRightArrow(false);
      }
    }
  };
  const onClickThu = (current, i) => {
    setCurrentImg(current);
    setCurrentImgIndex(i);
    if (photos.length > 1) {
      if (i === 0) {
        setLeftArrow(false);
        setRightArrow(true);
      } else if (i === photos.length - 1) {
        setLeftArrow(true);
        setRightArrow(false);
      } else {
        setLeftArrow(true);
        setRightArrow(true);
      }
    }
  };

  useEffect(() => {
    setCurrentImgIndex(0);
    setCurrentImg(photos ? photos[0] : { url: '' });
    setAllImgs(photos);
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
