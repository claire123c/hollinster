import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Card({product}) {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [rating, setRating] = useState();

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;
    if (reviewResults.length === 0) {
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

  useEffect(() => {
    axios.get(`/products/${product}`)
      .then((response) => {
        setCategory(response.data.category);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
    // need to implement sale price behavior
    axios.get(`/products/${product}/styles`)
      .then((response) => {
        setPrice(response.data.results[0].original_price);
        setImage(response.data.results[0].photos[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/reviews/${product}`)
      .then((response) => {
        setRating(averageRating(response.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img src={image} alt="Primary Product" />
      <div>{category}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rating}</div>
    </div>
  );
}

// Card.propTypes = {
//   product: PropTypes.number,
// };
