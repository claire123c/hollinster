import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import Gallery from './ImgGallery/Gallery.jsx';
import Info from './Info/Info.jsx';
import Cart from './AddCart/Cart.jsx';
import Freeform from './Info/Freeform.jsx';
import AllStyles from './StyleSelector/AllStyles.jsx';

const Top = styled.div`
  display: flex;
`;

const OveviewComp = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

const SideColumn = styled.div`
  padding: 2%;
  max-width: 40%;
  display: ${(props) => (props.expand ? 'none' : 'visible')}
`;

function Overview({ productID }) {
  const [productNum, setProductNum] = useState(productID);
  const [styleData, setStyleData] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [rMeta, setrMeta] = useState({});
  const [expand, setExpand] = useState(false);

  const onClickExp = () => {
    setExpand(!expand);
  };

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
      .catch(() => {
      });
  };
  const getStyles = () => {
    axios.get(`/products/${productNum}/styles`)
      .then((response) => {
        setStyleData(response.data.results);
        setCurrentStyle(findDefaultStyles(response.data.results));
      })
      .catch(() => {
      });
  };
  const getReviews = () => {
    axios.get(`/reviews/${productNum}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch(() => {
      });
  };
  const getMetaReviews = () => {
    axios.get(`/reviews/meta/${productNum}`)
      .then((response) => {
        setrMeta(response.data);
      })
      .catch(() => {
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
        <Gallery className="gallery" styles={currentStyle} onClickExp={onClickExp} expand={expand} />
        <SideColumn className="side-column" expand={expand}>
          <Info productInfo={productInfo} styles={currentStyle} reviews={reviews} meta={rMeta} expand={expand}/>
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
