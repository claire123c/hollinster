import React from 'react';
import Card from './Card.jsx';

export default function List({current, related}) {
  console.log(current)
  return (
    <>
      {related.map((product) => (<Card current={current} product={product} key={product} />))}
    </>
  );
}
