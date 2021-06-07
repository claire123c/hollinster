import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

const ThumbnailsBox = styled.div`
  margin-right: 18%;
`;
function Minis({ minis, currentImg }) {
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