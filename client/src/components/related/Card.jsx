import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const [related, setRelated] = useState([]);
  const [style, setStyle] = useState([]);
  const [rating, setRating] = useState([])

  let style = [];

  for (let i = 0; i < related.length; i++) {
    style.push(axios.get(`products/${related[i]}/styles`))
  }





  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
    axios.get(`/products/${current}/related`)
      .then((response) => {
        setRelated(response.data);
      })
      .catch((error) => console.log(error));
    axios.get(`/products/${current}/styles`)
      .then((response) => {
        setStyle(response.data);
      })
    axios.get(`/reviews/${current}`)
    })




  return (
    <div>
      <div>Product Category</div>
      <div>Product Name</div>
      <div>Price</div>
      <div>Star Rating</div>
    </div>
  );
}
