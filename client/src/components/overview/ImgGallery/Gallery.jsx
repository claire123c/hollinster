import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: 70%;
  width: 50%;
  background-color: rgb(232,232,232);
  min-width: 700px;
`;
const Images = styled.div`
`;
const Expand = styled.div`
  font-size: 40px;
  float: right;
`;

function Gallery({ styles }) {
  return (
    <GalleryBox className="gallery">
      <Expand className="collapsible">&#x2750;</Expand>
      <Images>
        <Large
          defaultStyle={styles[0]}
        />
      </Images>
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
