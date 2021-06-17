import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  height: 20%;
  width: 60%;
  z-index: 9999;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

const Container = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 4.5% 2%;
  position: relative;
`;

const HeaderContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;
const SizeHeader = styled.li`

`;

const SizeDropDown = styled.div`
  border: 1px solid black;
  padding: 0;
  margin-top: 8%;
  z-index: 9999;
  background-color: #F5F4F2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  overflow: scroll;
  position: absolute;
  width: 90%;
  height: 300px;
`;

const SizeOptions = styled.li`
  list-style: none;
  padding: 3%;
  margin: 1%;
  width: 90%;
  z-index: 9999;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

const ListContainer = styled.div`
  z-index: 9999;
`;
const ArrowImg = styled.img`
  height: 15px;
  margin-left: 40%;
`;

function Size({ skus, useCurrentSize, showError, setShowError }) {
  const [isOpen, setIsOpen] = useState(false);
  let imageSource = './assets/down-chevron.png';
  console.log(skus);
  if (!isOpen) {
    imageSource = './assets/down-chevron.png';
  } else {
    imageSource = './assets/up-chevron.png';
  }

  const clickOption = (event) => {
    useCurrentSize(event.target.value);
    setIsOpen(false);
    setShowError(false);
  };

  const getSizes = () => (Object.keys(skus).map((key) => {
    if (skus[key].size) {
      return (
        <SizeOptions value={key} key={key} onClick={clickOption}>
          {skus[key].size}
        </SizeOptions>
      );
    }
    return null;
  }));
  const getCurrentSize = (event) => {
    if (event.target.value !== 'OUT OF STOCK') {
      useCurrentSize(event.target.value);
    }
  };

  if (Object.keys(skus).length === 0) {
    return ('OUT OF STOCK');
  }

  if (!isOpen) {
    return (
      <SizeSelector className="size-selector">
        {showError ? 'Please select size' : ''}
        <Container>
          <HeaderContainer>
            <SizeHeader defaultValue="select" onClick={() => { setIsOpen(!isOpen); }}>
              SELECT SIZE
              <ArrowImg src={imageSource} alt="arrows" />
            </SizeHeader>
          </HeaderContainer>
        </Container>
      </SizeSelector>
    );
  }

  return (
    <SizeSelector className="size-selector">
      {showError ? 'Please select size' : <></>}
      <Container>
        <HeaderContainer>
          <SizeHeader defaultValue="select" onClick={() => { setIsOpen(!isOpen); }}>
            SELECT SIZE
            <ArrowImg src={imageSource} alt="arrows" />
          </SizeHeader>
        </HeaderContainer>
        <ListContainer>
          <SizeDropDown onChange={getCurrentSize} data-testid="selector" isOpen={isOpen}>
            {getSizes()}
          </SizeDropDown>
        </ListContainer>
      </Container>
    </SizeSelector>
  );
}

Size.propTypes = {
  skus: PropTypes.shape({}),
  useCurrentSize: PropTypes.func,
  showError: PropTypes.bool,
};

Size.defaultProps = {
  skus: {},
  useCurrentSize: () => {},
  showError: false,
};

export default Size;
