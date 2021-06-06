import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 100%;
`;

function Mini({ mini: { thumbnail_url }, currentImg }) {
  const ThumbnailBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${thumbnail_url === currentImg.thumbnail_url ? 'black' : 'rgb(232,232,232)'};
    outline: solid black 1px;
    width: 70px;
    height: 70px;
    margin: 10% 30%;
  `;
  return (
    <ThumbnailBox>
      <Thumbnail src={thumbnail_url} alt={thumbnail_url} />
    </ThumbnailBox>
  );
}

export default Mini;

Mini.propTypes = {
  mini: PropTypes.object
};
