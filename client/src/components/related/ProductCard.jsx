import React, { useState } from 'react';

export default function ProductCard(props) {
  const [product, setProduct] = useState('25167');
  const [related, getRelated] = useState('25167');

  return (
    <div>
      <img src="" alt="Image Not Available">
      <div>Product Category</div>
      <div>Product Name</div>
      <div>Price</div>
      <div>Star Rating</div>
    </div>
  )
}
