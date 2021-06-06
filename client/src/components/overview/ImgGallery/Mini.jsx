import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 10%;
`;

const ThumbnailBox = styled.div`
  background-color: grey;
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
