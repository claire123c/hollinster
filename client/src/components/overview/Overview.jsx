import React, { useState } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import sampleData from './sampleData.js';

function Overview() {
  const [productNum] = useState('25167');
  const getProduct = () => {
    axios.get(`/products/${productNum}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getProduct();
  return (
    <>
      <Gallery styles={sampleData.results} />
    </>
  );
}

export default Overview;
