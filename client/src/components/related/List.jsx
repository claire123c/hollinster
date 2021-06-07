import React from 'react';
import Card from './Card.jsx';

export default function ProductList(props) {
  return (
    <>
      {props.related.map((product) => (<Card product={product} key={product} />))}
    </>
  );
}
