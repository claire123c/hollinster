import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Carousel = styled.div`
  position: absolute
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  width: 18rem;
  height: 36rem;
  margin: 1em;
`;

// possible to reuse list twice?

export default function List({ current, related }) {
  return (
    <Carousel>
      {related.map((product) => (
        <Card
          current={current}
          product={product}
          key={product}
        />
      ))}
    </Carousel>
  );
}
