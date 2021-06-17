import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
  width: 60%;
`;

const Container = styled.div`
`;

const HeaderContainer = styled.ul`
  padding: 0;
`;
const SizeHeader = styled.li`
  list-style: none;
  margin: 3%;
  width: 80%;r
`;

const SizeDropDown = styled.ul`
  z-index: 2;
  padding: 0;
`;

const SizeOptions = styled.li`
  list-style: none;
  border: 1px solid black;
  padding: 7%;
  margin: 3%;
  width: 80%;
`;

const ListContainer = styled.div`
`;
const ArrowImg = styled.img`
  height: 2%;
  margin-left: 35%;
`;

function Size({ skus, useCurrentSize, showError }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('SELECT SIZE');
  let imageSource = './assets/down-chevron.png';

  if (!isOpen) {
    imageSource = './assets/down-chevron.png';
  } else {
    imageSource = './assets/up-chevron.png';
  }

  const clickOption = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
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
        {showError ? 'Please select size' : <></>}
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
