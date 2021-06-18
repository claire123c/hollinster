import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import CompareButton from './CompareButton.jsx';
import ComparisonModal from './ComparisonModal.jsx';

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

const Star = styled.div`
  position:
  &:hover { background-color: black;
  }
`;

export default function Card({
  current, product, setProductID, switchProduct,
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

  const toggleModal = () => {
    setModal(!modal);
  };

  const getProduct = () => axios.get(`/products/${product}`);

  const getProductStyles = () => axios.get(`/products/${product}/styles`);

  const getProductReviews = () => axios.get(`/reviews/${product}`);

  useEffect(() => {
    Promise.all([getProduct(), getProductStyles(), getProductReviews()])
      .then((response) => {
        defaultPrice = response[0].data.default_price;
        setProductData(response[0].data);
        setProductStyleData(response[1].data);
        setProductReviewData(response[2].data);
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

  // useEffect(() => {
  //   axios.get(`/products/${product}`)
  //     .then((response) => {
  //       setCategory(response.data.category);
  //       setName(response.data.name);
  //       setDefaultPrice(response.data.default_price);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // need to implement sale price behavior
  //   axios.get(`/products/${product}/styles`)
  //     .then((response) => {
  //       // setPrice(response.data.results[0].original_price);
  //       setPrice(checkPrice(response.data.results));
  //       setImage(response.data.results[0].photos[0].url);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   axios.get(`/reviews/${product}`)
  //     .then((response) => {
  //       setRating(averageRating(response.data.results));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
        <Star onClick={toggleModal}>&#9734;</Star>
        <Image src={image} alt={`A representation of ${name}`} onClick={() => { setProductID(product); }} />
        <Text>{category}</Text>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{rating}</Text>
      </CardWrapper>
    </>
  );
}

Card.propTypes = {
  product: PropTypes.number.isRequired,
};
