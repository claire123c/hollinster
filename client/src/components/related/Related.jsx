import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';

export default function Related() {
  const [current, setCurrent] = useState('25167');
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);
  const [styles, setStyle] = useState([]);
  const [rating, setRating] = useState([])

  let style = [];

  for (let i = 0; i < related.length; i++) {
    style.push(axios.get(`products/${related[i]}/styles`))
  }

  Promise.all(styles)
    .then((response) => {
      setStyle(response.data)
      console.log(style)
    })



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
    <List related={related}/>
  );
}