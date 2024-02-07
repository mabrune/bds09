import { Link } from 'react-router-dom';
import './styles.css';

const ReviewCard = () => {
  return (
    <div className="review-card-container">
      <Link to="/movies/1">Acessar /movies/1</Link>
      <a href="#link">Acessar /movies/2</a>
    </div>
  );
};

export default ReviewCard;
