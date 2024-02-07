import './styles.css';
import StarImg from 'assets/images/star.png';

const ReviewListing = () => {
  return (
    <div className="base-card review-list-container">
      <div className="review-list-header">
        <img src={StarImg} alt="Estrela" />
        <h6>Maria Silva</h6>
      </div>
      <div className="review-list-body">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ReviewListing;
