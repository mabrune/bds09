import { Review } from 'types/review';
import StarImg from 'assets/images/star.png';

import './styles.css';

type Props = {
  review: Review;
};

const ReviewListing = ({ review }: Props) => {
  return (
    <div className="base-card review-list-container">
      <div className="review-list-header">
        <img src={StarImg} alt="Estrela" />
        <h6>{review.user.name}</h6>
      </div>
      <div className="review-list-body">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewListing;
