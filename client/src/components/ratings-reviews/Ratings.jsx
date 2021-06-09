import React from 'react';
import axios from 'axios';
// Must import product_ID for successful git request
//

class Ratings extends React.Component {
  componentDidMount() {
    axios.get('').then((response) => {

    });
  }

  render() {
    return (
      <>
        <p>Ratings will appear here.</p>
      </>
    );
  }
}

// function Ratings() {
//   return (

//   );
// }

export default Ratings;
