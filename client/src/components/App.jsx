// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings-reviews/Ratings.jsx';
import Reviews from './ratings-reviews/Reviews.jsx';

const App = (props) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      {/* <Overview /> */}
      <div>
        {/* <Ratings /> */}
        {/* <Reviews /> */}
      </div>
    </>
  );
};

export default App;
