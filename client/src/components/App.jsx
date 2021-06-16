// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
// import Question from './question-answer/Question.jsx';
// import RatingsReviews from './ratings-reviews/ratings-reviews.jsx';

const App = (props) => {
  const [test, setTest] = useState(true);
  const [productID, setProductID] = useState(25167);

  const switchProduct = () => {
    setProductID(product);
  };

  return (
    <>
      <h1 style={{ fontFamily: 'Staatliches' }}>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>

      <Overview productID={productID} />
      {/* <Question /> */}
      <Related productID={productID} setProductID={setProductID} switchProduct={switchProduct} />
      {/* <RatingsReviews productID={productID} /> */}
    </>
  );
};

//attribute free icon flaticon at bottom of website: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;

