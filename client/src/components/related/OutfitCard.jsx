import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import RemoveProduct from './RemoveProduct.jsx'

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24em;
  height: 36em;
  margin: 1em;
  user-select: none;
  font-family: Quicksand, arial, sans-serif;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  `;

const Text = styled.div`
  font-family: 'Open Sans', sans-serif;
  `;

export default function OutfitCard({ product, removeFromOutfit }) {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [rating, setRating] = useState();
  const [showOutfit, setShowOutfit] = useState(false);
  // const [productData, setProductData] = useState([]);
  // const [productStyleData, setProductStyleData] = useState([]);
  // const [productReviewData, setProductReviewData] = useState([]);
  let defaultPrice = 0;

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;
    if (reviewResults.length < 1) {
      return 'No Rating Available';
    }
    for (let i = 0; i < reviewResults.length; i += 1) {
      if (reviewResults[i].rating !== undefined) {
        ratings += reviewResults[i].rating;
        totalRatings += 1;
      }
    }
    return ratings / totalRatings;
  };

  const checkPrice = (stylesResults) => {
    const defaultStyle = stylesResults.findIndex((element) => element['default?'] === true);
    const style = stylesResults[defaultStyle];
    if (defaultStyle === -1) {
      return defaultPrice;
    }
    return (style.sale_price ? style.sale_price : style.original_price);
  };

  const getProduct = () => axios.get(`/products/${product}`);

  const getProductStyles = () => axios.get(`/products/${product}/styles`);

  const getProductReviews = () => axios.get(`/reviews/${product}`);

  useEffect(() => {
    console.log(product)
    Promise.all([getProduct(), getProductStyles(), getProductReviews()])
      .then((response) => {
        defaultPrice = response[0].data.default_price;
        // setProductData(response[0].data);
        // setProductStyleData(response[1].data);
        // setProductReviewData(response[2].data);
        setCategory(response[0].data.category);
        setName(response[0].data.name);
        // setDefaultPrice(response[0].data.default_price);
        // setPrice(response[1].data.results[0].original_price);
        setPrice(checkPrice(response[1].data.results));
        setImage(response[1].data.results[0].photos[0].url);
        setRating(averageRating(response[2].data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CardWrapper>
      <div onClick={() => removeFromOutfit(product)}>x</div>
      <Image img src={image} alt={`A representation of ${name}`} />
      <Text>{category}</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{rating}</Text>
    </CardWrapper>
  );
}
