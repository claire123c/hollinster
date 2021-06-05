import React, { useState } from 'react';
import Minis from './Minis.jsx';

function Large(props) {
  const [currentImg, useCurrentImg] = useState(props.defaultStyle[0].photos[0]);
  const [otherImgs, useOtherImgs] = useState(props.defaultStyle[0].photos.filter(img => (
    img.url !== currentImg.url
  )));

  return (
    <>
      <Minis minis={otherImgs}/>
      <button>Left</button>
      <img src={currentImg.url} />
      <button>Right</button>
    </>
  );
}

export default Large;
