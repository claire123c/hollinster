import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityBox = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;

`;

const ContainerQ = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding-bottom: 5%;
`;

const HeaderContQ = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;
const QuantHeader = styled.li`

`;

const QuantityDropDown = styled.div`
  border: 1px solid black;
  padding: 0;
  margin-top: 8%;
  z-index: 2;
  background-color: #F5F4F2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  overflow: scroll;
  position: absolute;
  width: 90%;
  height: 300px;
`;

const QuantityOptions = styled.li`
  list-style: none;
  padding: 3%;
  margin: 1%;
  width: 90%;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

const ArrowImgQ = styled.img`
  height: 15px;
  margin-left: 40%;
`;

function Quantity({ currentSizeObj }) {
  const { quantity } = currentSizeObj;
  const [isOpenQ, setIsOpenQ] = useState(false);
  let imageSource = './assets/down-chevron.png';

  if (!isOpenQ) {
    imageSource = './assets/down-chevron.png';
  } else {
    imageSource = './assets/up-chevron.png';
  }
  const getQuantities = () => {
    let num;
    const numArray = [];
    if (quantity > 15) {
      num = 15;
    } else {
      num = quantity;
    }
    let i = 1;
    while (i <= num) {
      numArray.push(
        <QuantityOptions value={i} key={i}>{i}</QuantityOptions>,
      );
      i += 1;
    }
    return numArray;
  };

  if (!quantity) {
    return (
      <QuantityBox>
        -
      </QuantityBox>
    );
  }

  if (!isOpenQ) {
    return (
      <QuantityBox>
        <ContainerQ>
          <HeaderContQ>
            <QuantHeader onClick={() => { setIsOpenQ(!isOpenQ); }}>
              SELECT QUANTITY
              <ArrowImgQ src={imageSource} alt="arrows" />
            </QuantHeader>
          </HeaderContQ>
        </ContainerQ>
      </QuantityBox>
    );
  }

  return (
    <QuantityBox>
      <ContainerQ>
        <HeaderContQ>
          <QuantHeader onClick={() => { setIsOpenQ(!isOpenQ); }}>
            SELECT QUANTITY
            <ArrowImgQ src={imageSource} alt="arrows" />
          </QuantHeader>
        </HeaderContQ>
        <QuantityDropDown className="quantity-selector">
          {getQuantities()}
        </QuantityDropDown>
      </ContainerQ>
    </QuantityBox>
  );
}

Quantity.propTypes = {
  currentSizeObj: PropTypes.shape({
    quantity: PropTypes.number,
    size: PropTypes.string,
  }),
};

Quantity.defaultProps = {
  currentSizeObj: { quantity: 0 },
};

export default Quantity;
