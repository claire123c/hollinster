import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

const ThumbnailsBox = styled.div`
  margin-right: 10%;
`;
const UpButton = styled.div`
  font-size: 30px;
  margin: 10% 60%;
  color: rgb(72,72,72);
`;
const DownButton = styled.div`
  font-size: 30px;
  margin: 10% 60%;
  color: rgb(72,72,72);
`;
function Minis(props) {
  const { minis, currentImg, onClickThumb } = props;
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const [showPhotos, setshowPhotos] = useState(minis);
  let start = 0;
  let end = 7;
  const window = 7;

  let array = minis;
  if (array.length > 7) {
    array = minis.slice(start, end);
    if (!showDown) {
      setShowDown(true);
    }
  }

  const onClickDown = () => {
    console.log(end);
    if (end + end - 1 > minis.length) {
      start += window - 1;
      end += window - 1;
      console.log(array);
      array = minis.slice(start, end);
      console.log(array);

    } else {
    }
  };


  return (
    <ThumbnailsBox>
      {showUp ? <UpButton>&#5123;</UpButton> : <></>}
      {array.map((mini, i) => (
        <Mini mini={mini} key={mini.url} currentImg={currentImg} i={i} onClickThumb={onClickThumb} />
      ))}
      {showDown ? <DownButton onClick={onClickDown}>&#5121;</DownButton> : <></>}
    </ThumbnailsBox>

  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array,
  currentImg: PropTypes.object,
  onClickThumb: PropTypes.func,
};