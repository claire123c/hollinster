import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StylePhoto = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

function StyleThumbnail({ style }) {
const { name, photos } = style;
const { thumbnail_url } = photos[0];

  return (
    <div>
      <StylePhoto src={thumbnail_url} alt={name} />
    </div>
  );
}

export default StyleThumbnail;

StyleThumbnail.propTypes = {
  style: PropTypes.instanceOf(Object),
};

StyleThumbnail.defaultProps = {
  style: {},
}