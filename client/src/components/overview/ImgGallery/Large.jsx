import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Minis from './Minis.jsx';

const ThumbnailsGroup = styled.div`
  display: flex;
  max-height: 100%;
  max-width: 100%;
`;
const AllDefaultView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80");
  max-height: 100%;
  max-width: 100%;
`;
const DefaultView = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;

`;
const DefaultImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-height: 200;
  min-width: 200;
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

  //left and right button should disappear if on first image or last
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
    <ThumbnailsGroup className="thumbnailgroup">
      <Minis minis={allImgs} currentImg={currentImg} onClickThumb={onClickThumb} />
      <AllDefaultView className="alldefaultview">
        <LeftArrow onClick={leftButtonOnClick} type="button" data-testid="leftArrowImgGallery">&#8592;</LeftArrow>
        <DefaultView className="defaultview">
          <DefaultImg alt={defaultStyle.name} />
        </DefaultView>
        <RightArrow type="button" data-testid="rightArrowImgGallery" onClick={rightButtonOnClick}>&#8594;</RightArrow>
      </AllDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.object,
};