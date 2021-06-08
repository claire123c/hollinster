import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  width: 50%;
  background-color: rgb(232,232,232);
`;

function Gallery({ styles }) {
  return (
    <GalleryBox className="gallery">
      <Large
        defaultStyle={styles[0]}
      />
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
