// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// import Overview from './overview/Overview.jsx';
// import Related from './related/Related.jsx';
// import Question from './question-answer/Question.jsx';
// import RatingsReviews from './ratings-reviews/ratings-reviews.jsx';

const LogoBar = styled.h1`
  font-family: 'Staatliches';
  background-color: teal;
  margin: 0 10%;
  padding: 2%;
`;

const KangaImg = styled.img`
  height: 3%;
`;

const Search = styled.span`
  margin-left: 72%;
`;

const SearchLine = styled.input`
  display: inline;
  width: 9%;
  margin: 1%;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  font-size: 16px;
  &::placeholder {
    color: silver;
  }
  &:focus {
    outline: none;
}
`;

const SearchImg = styled.img`
  height: 2.5%;
`;

const App = (props) => {
  const [test, setTest] = useState(true);
  const [productID, setProductID] = useState(25173);

  const switchProduct = () => {
    setProductID(product);
  };

  return (
    <>
      <LogoBar>
        <KangaImg src="./kangaroo.png" alt="kanga" />
        HOLLINSTER
        <Search>
          <SearchLine placeholder="Search..." />
          <SearchImg src="./assets/loupe.png" />
        </Search>
      </LogoBar>
      <button type="button" onClick={() => { setTest(!test); }}>{test.toString()}</button>
      {/* <Overview productID={productID} /> */}
      {/* <Question />
      <Related productID={productID} setProductID={setProductID} switchProduct={switchProduct} />
      <RatingsReviews productID={productID} /> */}
    </>
  );
};

// attribute free icon flaticon at bottom of website: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;
