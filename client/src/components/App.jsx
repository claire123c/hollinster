// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
// import Overview from './overview/Overview.jsx';
// import Ratings from './ratings/Ratings.jsx';
// import Related from './related/Related.jsx'
// import Reviews from './reviews/Reviews.jsx';

const App = (props) => {
  const [test, setTest] = useState(true);
  const productID = 25167;

  return (
    <>
      <h1 style={{ fontFamily: 'Staatliches' }}>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      {/* <Overview />
      <Ratings productID={productID} />
      <Related />
      <Reviews productID={productID} /> */}
    </>
  );
};

export default App;
