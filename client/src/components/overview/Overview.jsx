import React from 'react';
import Gallery from './ImgGallery/Gallery.jsx';

import sampleData from './sampleData.js';

function Overview() {
  return (
    <>
      <div> hihi</div>
      <Gallery styles={sampleData.results} />
    </>
  );
}

export default Overview;
