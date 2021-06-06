import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Minis from './Minis.jsx';

function Large(props) {
  const { defaultStyle: [firstStyle] } = props;
  const { photos } = firstStyle;
  const [currentImg, useCurrentImg] = useState(photos[0]);
  const [otherImgs, useOtherImgs] = useState(photos.filter((img) => (
    img.url !== currentImg.url
  )));

  return (
    <>
      <Minis minis={otherImgs} />
      <button type="button">Left</button>
      <img src={currentImg.url} alt={firstStyle.name} />
      <button type="button">Right</button>
    </>
  );
}

export default Large;

Large.propTypes = {
  defaultStyle: PropTypes.array
};