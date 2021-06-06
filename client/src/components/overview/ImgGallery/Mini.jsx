import React from 'react';
import PropTypes from 'prop-types';

function Mini(props) {
  const { mini: { thumbnail_url }} = props;
  return (
    <>
      <img src={thumbnail_url} alt={thumbnail_url} />
    </>
  );
}

export default Mini;

Mini.propTypes = {
  mini: PropTypes.object
};
