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
  const [endI, setEndI] = useState(0);
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
  }, [array]);

  const onClickUp = () => {
    if (start - (window - 1) < 0) {
      start = 0;
    } else {
      start -= window - 1;
    }
    end -= window - 1;
    setArray(minis.slice(start, end));
  };

  const onClickDown = () => {
    start += window - 1;
    end += window - 1;
    setArray(minis.slice(start, end));
    if (end > minis.length) {
      setShowUp(true);
      setShowDown(false);
    } else {
      setShowUp(true);
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