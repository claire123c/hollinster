import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';

//TODO: fix 25178 edge case
//25172 edge case
//25168
function Overview() {
  const [productNum] = useState('25168');
  const [styleData, setStyleData] = useState(emptyData.results);
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState({});

  const getProductDeets = () => {
    axios.get(`/products/${productNum}`)
      .then((response) => {
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
  const getReviews = () => {
    axios.get(`/reviews/${productNum}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStyles();
    getProductDeets();
    getReviews();
  }, []);

  return (
    <>
      <Gallery className="gallery" styles={styleData} />
      <Info productInfo={productInfo} styles={styleData} reviews={reviews} />
    </>
  );
}

export default Overview;
