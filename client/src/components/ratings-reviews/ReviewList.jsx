import React from 'react';
import axios from 'axios';

const getReviews = (data) => <Review data={data} />;
class ReviewList extends React.Component() {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  useEffect(() => {
    const getRatings = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}`);
      setRatings(result.data);
    };
    getRatings();
  }, []);

  render() {
    return (
      <div>
        {this.props.map(getReviews)}
      </div>
    );
  }
}

export default ReviewList;
