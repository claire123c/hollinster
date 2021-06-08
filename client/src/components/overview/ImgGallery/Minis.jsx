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
  const [array, setArray] = useState(minis);
  let start = 0;
  let end = 7;
  const window = 7;

  useEffect(() => {
    setArray(minis);
  }, [props]);

  useEffect(() => {
    if (array.length > window) {
      setArray(minis.slice(start, end));
      if (!showDown) {
        setShowDown(true);
      }
    }
  });

  //let array = minis;
  // if (array.length > 7) {
  //   array = minis.slice(start, end);
  //   if (!showDown) {
  //     setShowDown(true);
  //   }
  // }

  const onClickDown = () => {
    start += window - 1;
    end += window - 1;
    setArray(minis.slice(start, end));
    //array = minis.slice(start, end);
    if (end > minis.length) {
      setShowUp(true);
      setShowDown(false);
    } else {
      setShowUp(true);
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
//make carousel into class components so it can be reusable

// class Carousel {
// }

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array,
  currentImg: PropTypes.object,
  onClickThumb: PropTypes.func,
};