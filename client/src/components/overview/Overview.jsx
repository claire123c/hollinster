import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import Cart from './AddCart/Cart.jsx';
import Freeform from './Info/Freeform.jsx';
import sampleData from './sampleData.js';
import emptyData from './emptyData.js';
import AllStyles from './StyleSelector/AllStyles.jsx';

const Top = styled.div`
  display: flex;
`;

const OveviewComp = styled.div`
  margin-left: 12%;
  margin-right: 12%;
`;

const SideColumn = styled.div`
  padding: 2%;
  max-width: 40%;
`;

function Overview({ productID }) {
  const [productNum, setProductNum] = useState(productID);
  const [styleData, setStyleData] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
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
    setProductNum(productID);
  }, [productID]);

  useEffect(() => {
    getStyles();
    getProductDeets();
    getReviews();
    getMetaReviews();
  }, [productNum]);

  return (
    <OveviewComp>
      <Top>
        <Gallery className="gallery" styles={currentStyle} />
        <SideColumn className="side-column">
          <Info productInfo={productInfo} styles={currentStyle} reviews={reviews} meta={rMeta} />
          <AllStyles className="all-styles" styleData={styleData} currentStyle={currentStyle} changeStyle={setCurrentStyle} />
          <Cart currentStyle={currentStyle} />
        </SideColumn>
      </Top>
      <Freeform productInfo={productInfo} />
    </OveviewComp>
  );
}

export default Overview;

Overview.propTypes = {
  productID: PropTypes.number,
};

Overview.defaultProps = {
  productID: 25167,
};
