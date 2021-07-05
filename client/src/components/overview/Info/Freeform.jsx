import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FreeformText = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const ListItem = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Line = styled.hr`
  margin-left: 7%;
  margin-right: 7%;
  border: 1px solid rgb(32,32,32);
  color: rgb(32,32,32);
`;

const Slogan = styled.div`
  font-weight: bold;
  margin-bottom: 5%;
`;

const Description = styled.div`
  color: rgb(80,80,80);
`;

const SplitOne = styled.div`
  width: 61%;
`;
const SplitTwo = styled.div`
  width: 28%;
`;

function Freeform({ productInfo }) {
  const { slogan, description, features } = productInfo;

  const getListItems = (currentFeat) => {
    if (currentFeat) {
      return (
        currentFeat.map((item) => {
          if (!item.value) {
            return (
              <ListItem key={`${item.feature}_${item.value}`}>
                <span>&#10003; </span>
                <span>{item.feature}</span>
              </ListItem>
            );
          }
          return (
            <ListItem key={`${item.feature}_${item.value}`}>
              <span>
                {item.feature}
                :
                {' '}
              </span>
              <span>{item.value}</span>
            </ListItem>
          );
        })
      );
    }
    return <li />;
  };

  return (
    <FreeformText className="freeform">
      <SplitOne>
        <Slogan className="slogan">{slogan}</Slogan>
        <Description className="description">{description}</Description>
      </SplitOne>
      <Line className="features" />
      <SplitTwo>
        {getListItems(features)}
      </SplitTwo>
    </FreeformText>
  );
}

export default Freeform;

Freeform.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
};

Freeform.defaultProps = {
  productInfo: {},
};
