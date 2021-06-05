import React from 'react';

function Large(props) {
  console.log(props);
  const { defaultStyle } = props;
  const defaultImg = defaultStyle[0].photos[0].url;

  return (
    <>
      <img src={defaultImg} />
    </>
  );
}

export default Large;
