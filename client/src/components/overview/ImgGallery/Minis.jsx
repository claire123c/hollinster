import React from 'react';
import PropTypes from 'prop-types';
import Mini from './Mini.jsx'

function Minis(props) {
  const { minis } = props;
  return (
    <>
      {minis.map((mini) => (
        <Mini mini={mini} key={mini.url} />
      ))}
    </>
  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.array
};