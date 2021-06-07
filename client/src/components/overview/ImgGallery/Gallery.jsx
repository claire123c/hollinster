import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: 700px;
  width: 1000px;
  background-color: rgb(232,232,232);
`;

function Gallery({ styles }) {
  return (
    <GalleryBox className="gallery">
      <Large
        defaultStyle={styles.find((style) => (
          style['default?'] === true
        ))}
      />
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
