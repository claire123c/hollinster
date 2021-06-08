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
const DefaultView = styled.img`
  height: 700;
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
  console.log(defaultStyle, 'default');
  const { defaultStyle } = props;
  const { photos } = defaultStyle;
  console.log(photos, 'photos');
  const [currentImgIndex, usecurrentImgIndex] = useState(0);
  console.log(photos[currentImgIndex]);
  const [currentImg, useCurrentImg] = useState(photos[currentImgIndex]);
  const [allImgs] = useState(photos);
  console.log(Object.is(photos[currentImgIndex], currentImg));
  console.log(currentImg, 'img');
  console.log(0);

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
  }, [props]);

  return (
    <ThumbnailsGroup>
      <Minis minis={allImgs} currentImg={currentImg} onClickThumb={onClickThumb} />
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