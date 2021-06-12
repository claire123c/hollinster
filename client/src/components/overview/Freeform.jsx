import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
`;
function Freeform({ productInfo }) {
  const { slogan, description, features } = productInfo;
  console.log(features);


  return (
    <div>
      <div>{slogan}</div>
      <div>{description}</div>
      <List>
        <li>hi</li>
        <li>sadf</li>
        <li>asdfasdfsadf</li>
      </List>
    </div>
  );
}

export default Freeform;

Freeform.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
  }),
};

Freeform.defaultProps = {
  productInfo: {},
};
