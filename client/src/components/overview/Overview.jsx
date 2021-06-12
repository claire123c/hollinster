import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import Freeform from './Info/Freeform.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';

//TODO: fix 25178 edge case, and quotes
  //what to do if image isn't the same
//25172 edge case
  //what to do if there's an invalid HTML url?

const Top = styled.div`
  display: flex;
`;

const OveviewComp = styled.div`
  margin-left: 12%;
  margin-right: 12%;
`;

function Overview() {
  const [productNum] = useState('25167');
  const [styleData, setStyleData] = useState(emptyData.results);
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState({});
  const [currentStyle, setCurrentStyle] = useState(emptyData.results[0]);
  const [rMeta, setrMeta] = useState({});

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

  const getMetaReviews = () => {
    axios.get(`/reviews/meta/${productNum}`)
      .then((response) => {
        setrMeta(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStyles();
    getProductDeets();
    getReviews();
    getMetaReviews();
  }, []);

  return (
    <OveviewComp>
      <Top>
        <Gallery className="gallery" styles={currentStyle} />
        <Info productInfo={productInfo} styles={currentStyle} reviews={reviews} meta={rMeta} />
      </Top>
      <Freeform productInfo={productInfo} />
    </OveviewComp>
  );
}

export default Overview;
