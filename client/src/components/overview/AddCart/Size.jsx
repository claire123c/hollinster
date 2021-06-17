import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  border: 1px solid black;
  margin: 2%;
  padding: 5%;
  width: 60%;
`;

const SizeHeader = styled.div`

`;

const SizeDropDown = styled.ul`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 2;
`;

const SizeOptions = styled.li`
  list-style: none;
  border: 1px solid black;
  padding: 10%;
  margin: 2%;
`;

const ListContainer = styled.div`
`;
const ArrowImg = styled.img`
  height: 2%;
  margin-left: 30%;
`;

function Size({ skus, useCurrentSize, showError }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('SELECT SIZE');
  let imageSource = './assets/down-arrow.png';

  if (!isOpen) {
    imageSource = './assets/down-arrow.png';
  } else {
    imageSource = './assets/up-arrow.png';
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

  return (
    <SizeSelector className="size-selector">
      {showError ? 'Please select size' : ''}
      {Object.keys(skus).length === 0 ? 'OUT OF STOCK'
        : (
          <ListContainer>
            <SizeHeader defaultValue="select" onClick={() => { setIsOpen(!isOpen); }}>
              SELECT SIZE
              <ArrowImg src={imageSource} alt="down-arrow" />
            </SizeHeader>
            <SizeDropDown onChange={getCurrentSize} data-testid="selector" isOpen={isOpen}>
              {getSizes()}
            </SizeDropDown>
          </ListContainer>
        )}
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
