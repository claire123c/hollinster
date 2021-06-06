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
      <CenterDefaultView>
        <LeftArrow type='button'></LeftArrow>
        <DefaultView src={currentImg.url} alt={firstStyle.name} />
        <RightArrow type='button'></RightArrow>
      </CenterDefaultView>
    </ThumbnailsGroup>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.array
};