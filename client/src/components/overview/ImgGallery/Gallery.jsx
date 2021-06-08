import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: 70%;
  width: ${(props) => (props.expand ? '80%' : '50%')};
  background-color: rgb(232,232,232);
  overflow: hidden;
`;
const Images = styled.div`
  display: flex;
  flex-direction: row;
`;
const Expand = styled.div`
  font-size: 40px;
  float: right;
`;

function Gallery({ styles }) {
  const [expand, setExpand] = useState(false);
  const onClickExp = () => {
    setExpand(!expand);
  };
  return (
    <GalleryBox className="gallery" expand={expand}>
      <Expand onClick={onClickExp} className="collapsible">&#x2610;</Expand>
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
