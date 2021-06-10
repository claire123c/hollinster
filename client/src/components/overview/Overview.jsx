import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';

function Overview() {
  const [productNum] = useState('25174');
  const [styleData, setProductData] = useState(emptyData.results);
  const [productInfo] = useState();

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
      <Gallery className="gallery" styles={styleData} />
      <Info />
    </>
  );
}

export default Overview;
