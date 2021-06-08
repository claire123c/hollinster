import React from 'react';
import Card from './Card.jsx';

export default function List({related}) {
  return (
    <>
      {related.map((product) => (<Card product={product} key={product} />))}
    </>
  );
}
