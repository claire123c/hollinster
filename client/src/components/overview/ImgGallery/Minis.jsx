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

  let array = minis;
  if (array.length > 7) {
    array = minis.slice(0, 7);
    if (!showDown) {
      setShowDown(true);
    }
  }

  const onClickDown = () => {
    //array = minis.slice(7, )
  };


  return (
    <ThumbnailsBox>
      {showUp ? <UpButton>&#5123;</UpButton> : <></>}
      {array.map((mini, i) => (
        <Mini mini={mini} key={mini.url} currentImg={currentImg} i={i} onClickThumb={onClickThumb} />
      ))}
      {showDown ? <DownButton>&#5121;</DownButton> : <></>}
    </ThumbnailsBox>

  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array,
  currentImg: PropTypes.object,
  onClickThumb: PropTypes.func,
};