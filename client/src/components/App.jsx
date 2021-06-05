// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
import Overview from './overview/Overview.jsx';

const App = (props) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      <Overview />
    </>
  );
};

export default App;
