import React from 'react';
import PropTypes from 'prop-types';
import Mini from './Mini.jsx'

function Minis(props) {

  return (
    <>
      {props.minis.map(mini => (
        <Mini mini={mini} key={mini.url} />
      ))}
    </>
  );
}

export default Minis;
