import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: 70%;
  width: 50%;
  background-color: rgb(232,232,232);
`;
const Images = styled.div`
  display: flex;
  align-items: center;
`;
const Expand = styled.div`
  display: inline;
  font-size: 40px;
`;

function Gallery({ styles }) {
  return (
    <GalleryBox className="gallery">
      <Images>
        <Large
          defaultStyle={styles[0]}
        />
        <Expand className="collapsible">&#x2750;</Expand>
      </Images>
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
