import React from 'react';
import PropTypes from 'prop-types';
import Large from './Large.jsx';

function Gallery(props) {
  const { styles } = props;

  return (
    <>
      <Large defaultStyle={styles.filter((style) => (
        style['default?'] === true
      ))}
      />
    </>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.array
};
