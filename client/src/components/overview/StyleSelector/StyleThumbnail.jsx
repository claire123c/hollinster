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
  height: 55px;
  width: 55px;
  border: 1.5px solid black;
  margin: 8px;
`;

const CheckMark = styled.img`
  border-radius: 50%;
  border: 1.5px solid black;
  background-color: white;
  width: 8px;
  height: 8px;
  padding: 2%;
  z-index: 2;
  position: absolute;
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
      {style.style_id === current ? <CheckMark src="./assets/check-mark-black-outline.png" alt="checkmark" /> : <CheckMark />}

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
