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
    border-bottom: ${thumbnail_url === currentImg.thumbnail_url ? 'solid rgb(72,72,72) 3px' : 'solid rgb(232,232,232)'};
    outline: solid rgb(72,72,72) 1px;
    padding: 3%;
    width: 100%;
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
