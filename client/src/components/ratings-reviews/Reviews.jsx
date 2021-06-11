import React, { useState } from 'react';
import styled from 'styled-components';

const Review = (props) => {
  const [productInfo, setProductInfo] = useState();

  render() {
    return (
      <>
        <h1>{props.STARS}</h1>
        <h3>{props.USERNAME}</h3>
        <h5>{props.DATE}</h5>
        <h3>{props.SUMMARY}</h3>
        <p>{props.BODY}</p>
        <h5>{props.RESPONSE}</h5>
        <h5>{props.HELPFUL}</h5>
      </>
    );
  }
}

export default Tile;