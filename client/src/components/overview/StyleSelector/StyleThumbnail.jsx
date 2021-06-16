import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleThumbComp = styled.div`
  position: relative;
`;

const StylePhoto = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
  height: calc(9vh);
  width: calc(9vh);
  border: 1px solid rgb(72,72,72);
  margin: 8px;
`;

const CheckMark = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(72,72,72);
  background-color: white;
  width: 11px;
  height: 11px;
  padding: 3%;
  position: absolute;
  z-index: 2;
  left: 70%;
  top: 10%;
`;

function StyleThumbnail({ style, current, changeStyle }) {
  const { name, photos } = style;
  const { thumbnail_url } = photos[0];

  const onClickStyle = () => {
    changeStyle(style);
  };

  return (
    <StyleThumbComp>
      <StylePhoto src={thumbnail_url} alt={name} onClick={onClickStyle} className="style-photo" />
      {style.style_id === current ? <CheckMark src="./assets/tick.png" alt="checkmark" /> : <></>}
    </StyleThumbComp>
  );
}

export default StyleThumbnail;

StyleThumbnail.propTypes = {
  style: PropTypes.instanceOf(Object),
  current: PropTypes.number,
};

StyleThumbnail.defaultProps = {
  style: {},
  current: 0,
};
