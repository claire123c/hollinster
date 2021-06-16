import React from 'react';
import Card from './Card.jsx';

export default function List({ current, related }) {
  return (
    <>
      {related.map((product) => (
        <Card
          current={current}
          product={product}
          key={product}
        />
      ))}
    </>
  );
}
