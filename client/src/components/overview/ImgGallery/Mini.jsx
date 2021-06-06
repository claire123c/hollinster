import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 100%;
`;

const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: white;
  outline: solid black 1px;
  width: 50px;
  height: 50px;
  margin: 40% 20%;
`;

function Mini(props) {
  const { mini: { thumbnail_url } } = props;
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
