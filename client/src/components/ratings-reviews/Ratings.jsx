import React from 'react';
import axios from 'axios';

function Ratings(props) {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const getRatings = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}`);
      setRatings(result.data);
    };
    getRatings();
  }, []);

  return (
    <>
      <p>Ratings will appear here.</p>
    </>
  );
}

export default Ratings;
