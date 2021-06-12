import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FreeformText = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
`;

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
`;

const Slogan = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  color: rgb(80,80,80);
`;

function Freeform({ productInfo }) {
  const { slogan, description, features } = productInfo;

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
    <FreeformText className="freeform">
      <div>
        <Slogan>{slogan}</Slogan>
        <Description>{description}</Description>
      </div>
      <Line />
      <List>
        {getListItems(features)}
      </List>
    </FreeformText>
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
