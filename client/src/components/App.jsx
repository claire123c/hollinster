// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx'


const App = (props) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
<<<<<<< HEAD
      <Related />
=======
>>>>>>> e6c33d5e385a2843d9b97ed6d7d5ddbebaff16cd
      {/* <Overview /> */}
      {/* <Related /> */}
    </>
  );
};

export default App;
