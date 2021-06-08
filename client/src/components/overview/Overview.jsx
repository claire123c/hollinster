import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import sampleData from './sampleData.js';

function Overview() {
  const [productNum] = useState('25173');
  const [productData, setProductData] = useState(sampleData.results);
  const getProductDeets = () => {
    axios.get(`/products/${productNum}`)
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getStyles = () => {
    axios.get(`/products/${productNum}/styles`)
      .then((response) => {
        console.log(response.data.results);
        setProductData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <>
      <Gallery styles={productData} />
    </>
  );
}

export default Overview;
