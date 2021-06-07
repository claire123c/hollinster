import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';

export default function Related() {
  const [current, setCurrent] = useState('25167');
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`/products/${current}/related`)
      .then((response) => {
        console.log(response.data);
        setRelated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <List related={related} />
  );
}
