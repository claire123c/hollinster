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

function Gallery(props) {
  const { styles } = props;

  return (
    <GalleryBox>
      <Large defaultStyle={styles.filter((style) => (
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
