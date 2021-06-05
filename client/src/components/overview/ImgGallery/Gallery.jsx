import React from 'react';
import Large from './Large.jsx';

function Gallery(props) {

  return (
    <>
      <div>yoo</div>
      <Large defaultStyle={props.styles.filter(style => (
        style['default?'] === true
      ))}/>
    </>
  );
}

export default Gallery;
