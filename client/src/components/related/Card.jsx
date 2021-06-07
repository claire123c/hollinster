import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [style, setStyle] = useState();
  const [rating, setRating] = useState();

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;
    if (reviewResults.length === 0) {
      return 'No Rating Available';
    }
    for (let i = 0; i < reviewResults.length; i++) {
      if (reviewResults[i].rating !== undefined) {
        console.log(ratings)
        ratings += reviewResults[i].rating;
        totalRatings += 1;
      }
    }
    return ratings / totalRatings;
  };

  useEffect(() => {
    axios.get(`/products/${props.product}`)
      .then((response) => {
        setCategory(response.data.category);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/products/${props.product}/styles`)
      .then((response) => {
        setPrice(response.data.results[0].original_price);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/reviews/${props.product}`)
      .then((response) => {
        setRating(averageRating(response.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>{category}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rating}</div>
    </div>
  );
}
