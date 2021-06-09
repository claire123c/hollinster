import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

const ThumbnailsBox = styled.div`
  margin-right: 10%;
`;
const UpButton = styled.div`
  font-size: 30px;
  margin: 10% 30%;
  color: rgb(72,72,72);
`;
const DownButton = styled.div`
  font-size: 30px;
  margin: 10% 30%;
  color: rgb(72,72,72);
`;
function Minis(props) {
  const { minis, currentImg, onClickThumb } = props;
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const [array, setArray] = useState(minis);
  const [startI, setStartI] = useState(0);
  const [endI, setEndI] = useState(7);
  // let startI = 0;
  // let endI = 7;
  const window = 7;

  useEffect(() => {
    setArray(minis);
  }, [props]);

  useEffect(() => {
    if (array.length > window) {
      setArray(minis.slice(startI, endI));
      if (!showDown) {
        setShowDown(true);
      }
    }
  }, [array]);

  const onClickUp = () => {
    if (startI - (window - 1) <= 0) {
      setStartI(0);
      console.log(endI - window - 1);
      setArray(minis.slice(0, endI - (window - 1)));
      setShowUp(false);
      setShowDown(true);
    } else {
      setStartI(startI - window - 1);
      setArray(minis.slice(startI - window - 1, endI - (window - 1)));
      setShowUp(true);
      setShowDown(true);
    }
    setEndI(endI - (window - 1));
  };

  const onClickDown = () => {
    setStartI(startI + window - 1);
    setEndI(endI + window - 1);
    setArray(minis.slice(startI + window - 1, endI + window - 1));

    if (endI + window - 1 > minis.length) {
      setShowUp(true);
      setShowDown(false);
    } else {
      setShowUp(true);
      setShowDown(false);
    }
  };

  return (
    <ThumbnailsBox>
      {showUp ? <UpButton onClick={onClickUp}>&#5123;</UpButton> : <></>}
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