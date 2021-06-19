import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import ComparisonModal from './ComparisonModal.jsx';
import Star from '../overview/Info/Star.jsx';

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24em;
  height: 36em;
  margin: 1em;
  user-select: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const Image = styled.img`
  width: 95%;
  height: 24rem;
  object-fit: cover;
`;

const Background = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  `;

const Text = styled.div`
  font-family: 'Open Sans', sans-serif;
  `;

const Strikethrough = styled.div`
  text-decoration: line-through;
  `;

const Sale = styled.div`
  color: red;
  `;

const StarButton = styled.div`
`;

export default function Card({
  current, product, setProductID,
}) {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [rating, setRating] = useState();
  const [modal, setModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productStyleData, setProductStyleData] = useState([]);
  const [productReviewData, setProductReviewData] = useState([]);
  const noDisplay = [{ display: 'none' }];
  let defaultPrice = 0;
  let salePrice = 0;
  const sale = false;

  // const averageRating = (reviewResults) => {
  //   let ratings = 0;
  //   let totalRatings = 0;
  //   if (reviewResults.length < 1) {
  //     return 'No Rating Available';
  //   }
  //   for (let i = 0; i < reviewResults.length; i += 1) {
  //     if (reviewResults[i].rating !== undefined) {
  //       ratings += reviewResults[i].rating;
  //       totalRatings += 1;
  //     }
  //   }
  //   return ratings / totalRatings;
  // };

  const checkPrice = (stylesResults) => {
    const defaultStyle = stylesResults.findIndex((element) => element['default?']);
    const style = stylesResults[defaultStyle];
    if (defaultStyle === -1) {
      return defaultPrice;
    }
    return (style.sale_price ? style.sale_price : style.original_price);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const getProduct = () => axios.get(`/products/${product}`);

  const getProductStyles = () => axios.get(`/products/${product}/styles`);

  const getProductReviews = () => axios.get(`/reviews/meta/${product}`);

  useEffect(() => {
    Promise.all([getProduct(), getProductStyles(), getProductReviews()])
      .then((response) => {
        defaultPrice = response[0].data.default_price;
        salePrice = response[0].data.sale_price;
        setProductData(response[0].data);
        setProductStyleData(response[1].data);
        setProductReviewData(response[2].data);
        setCategory(response[0].data.category);
        setName(response[0].data.name);
        setPrice(checkPrice(response[1].data.results));
        setImage(response[1].data.results[0].photos[0].url);
        setRating(response[2].data.ratings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {modal
        ? (
          <Background onClick={toggleModal}>
            <ComparisonModal current={current} productData={productData} />
          </Background>
        )
        : null}
      <CardWrapper>
        <StarButton onClick={toggleModal}>&#9734;</StarButton>
        <Image src={image} alt={`A representation of ${name}`} onClick={() => { setProductID(product); }} />
        <Text>{category}</Text>
        <Text>{name}</Text>
        {sale ? (
          <>
            <Strikethrough>{price}</Strikethrough>
            <Sale>{salePrice}</Sale>
          </>
        ) : <Text>{price}</Text>}
        <Star ratings={rating} results={noDisplay} />
      </CardWrapper>
    </>
  );
}

Card.propTypes = {
  product: PropTypes.number.isRequired,
  setProductID: PropTypes.func.isRequired,
  current: PropTypes.shape({}),
};

Card.defaultProps = {
  current: {},
};
