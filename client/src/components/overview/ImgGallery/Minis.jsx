import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

const ThumbnailsBox = styled.div`

`;

function Minis(props) {
  const { minis } = props;
  return (
    <ThumbnailsBox>
      {minis.map((mini) => (
        <Mini mini={mini} key={mini.url} />
      ))}
    </ThumbnailsBox>

  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array
};