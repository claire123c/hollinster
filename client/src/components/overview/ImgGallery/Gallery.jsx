import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  background-color: rgb(232,232,232);
`;

function Gallery({ styles }) {
  return (
    <GalleryBox>
      <Large
        defaultStyle={styles.filter((style) => (
          style['default?'] === true
        ))[0]}
      />
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
