import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

// possible to reuse list twice?

export default function List({ current, related, productID, setProductID, switchProduct }) {
  return (
    <>
      {related.map((product) => (
        <Card
          current={current}
          product={product}
          key={product}
          productID={productID}
          switchProduct={switchProduct}
          setProductID={setProductID}
        />
      ))}
    </>
  );
}

List.defaultProps = {
  related: []
}
