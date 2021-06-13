import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: calc(60vh - 16px);
  width: ${(props) => (props.expand ? '70%' : '50%')};
  background-color: rgb(232,232,232);
  overflow: hidden;
  padding: 2%;
`;
const Expand = styled.div`
  font-size: 40px;
  float: right;
  min-height: 20px;
  min-width: 20px;
`;

function Gallery({ styles }) {
  const [expand, setExpand] = useState(false);
  const onClickExp = () => {
    setExpand(!expand);
  };

  return (
    <GalleryBox className="gallery" expand={expand}>
      <Expand onClick={onClickExp} className="collapsible">&#10696;</Expand>
      <Large
        defaultStyle={styles}
      />
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.object,
};

Gallery.defaultProps = {
  styles: {
    style_id: 142825,
    name: '',
    original_price: '',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: '',
        url: '',
      },
    ],
  },
};
