import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 100%;
`;
const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.thumbnail_url === props.currentImg.thumbnail_url ? 'solid rgb(72,72,72) 3px' : 'solid rgb(232,232,232)')};
  outline: solid rgb(72,72,72) 1px;
  padding: 3%;
  width: 100%;
  height: 70px;
  margin: 10% 30%;
`;

function Mini(props) {
  const { mini, currentImg, onClickThumb, i } = props;
  const { thumbnail_url } = mini;
  const onClickImg = () => {
    onClickThumb(mini, i);
  };

  return (
    <ThumbnailBox thumbnail_url={thumbnail_url} currentImg={currentImg}>
      <Thumbnail onClick={onClickImg} className="minithumbnail" src={thumbnail_url} alt={thumbnail_url} />
    </ThumbnailBox>
  );
}

export default Mini;

Mini.propTypes = {
  mini: PropTypes.object,
  onClickThumb: PropTypes.func,
  currentImg: PropTypes.object,
  i: PropTypes.number,
};
