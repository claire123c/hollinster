import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';

//TODO: fix 25178 edge case
  //what to do if image isn't the same
//25172 edge case
  //what to do if there's an invalid HTML url?
function Overview() {
  const [productNum] = useState('25169');
  const [styleData, setStyleData] = useState(emptyData.results);
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState({});
  const [currentStyle, setCurrentStyle] = useState(emptyData.results[0]);

  console.log(styleData);

  const findDefaultStyles = (stylesArr) => {
    const newArr = stylesArr.find((style) => (
      style['default?']
    ));

    if (!newArr) {
      return stylesArr[0];
    }
    return newArr;
  };

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
        setCurrentStyle(findDefaultStyles(response.data.results));
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
      <Gallery className="gallery" styles={currentStyle} />
      <Info productInfo={productInfo} styles={styleData[2]} reviews={reviews} />
    </>
  );
}

export default Overview;
