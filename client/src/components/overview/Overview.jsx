import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';

function Overview() {
  const [productNum] = useState('25174');
  const [styleData, setStyleData] = useState(emptyData.results);
  const [productInfo, setProductInfo] = useState({});

  const getProductDeets = () => {
    axios.get(`/products/${productNum}`)
      .then((response) => {
        console.log(response.data);
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getStyles = () => {
    axios.get(`/products/${productNum}/styles`)
      .then((response) => {
        setStyleData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStyles();
    getProductDeets();
  }, []);

  return (
    <>
      <Gallery className="gallery" styles={styleData} />
      <Info productInfo={productInfo} styles={styleData}/>
    </>
  );
}

export default Overview;
