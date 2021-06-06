import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

function Minis({ minis, currentImg }) {
  const ThumbnailsBox = styled.div`
    margin-right: 30%;
  `;
  return (
    <ThumbnailsBox>
      {minis.map((mini) => (
        <Mini mini={mini} key={mini.url} currentImg={currentImg} />
      ))}
    </ThumbnailsBox>

  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array,
  currentImg: PropTypes.object
};