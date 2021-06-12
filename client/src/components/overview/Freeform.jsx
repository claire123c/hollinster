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

  const getListItems = (currentFeat) => {
    if (currentFeat) {
      return (
        currentFeat.map((item) => {
          if (!item.value) {
            return (
              <li key={`${item.feature}_${item.value}`}>
                <span>&#10003; </span>
                <span>{item.feature}</span>
              </li>
            );
          }
          return (
            <li key={`${item.feature}_${item.value}`}>
              <span>{item.feature}: </span>
              <span>{item.value}</span>
            </li>
          );
        })
      );
    }
    return <li />;
  };

  return (
    <div>
      <div>{slogan}</div>
      <div>{description}</div>
      <List>
        {getListItems(features)}
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
