import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx'

const ThumbnailsBox = styled.div`
  margin-right: 18%;
`;
function Minis(props) {
  const { minis, currentImg, onClickThumb } = props;

  return (
    <ThumbnailsBox>
      {minis.map((mini, i) => (
        <Mini mini={mini} key={mini.url} currentImg={currentImg} i={i} onClickThumb={onClickThumb} />
      ))}
    </ThumbnailsBox>

  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array,
  currentImg: PropTypes.object,
  onClickThumb: PropTypes.func,
};