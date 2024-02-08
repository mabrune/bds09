import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { Review } from 'types/review';

import './styles.css';

const review: Review = {
  id: 1,
  text: 'Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.',
  movieId: 1,
  user: {
    id: 1,
    name: 'Maria Silva',
    email: 'mariasilva@gmail.com',
  },
};

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id: 1</h1>
      <div>
        <ReviewForm />
      </div>
      <div>
        <ReviewListing review={review} />
        <ReviewListing review={review} />
        <ReviewListing review={review} />
        <ReviewListing review={review} />
      </div>
    </div>
  );
};

export default MovieDetails;
