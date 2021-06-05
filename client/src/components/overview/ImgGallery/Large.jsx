import React from 'react';
import Minis from './Minis.jsx';

function Large(props) {

  console.log(props.defaultStyle);

  return (
    <>
      <button>Left</button>
      <img src={props.defaultStyle[0].photos[0].thumbnail_url} />
      <button>Right</button>
    </>
  );
}

export default Large;
