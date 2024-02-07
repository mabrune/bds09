import Navbar from 'components/Navbar';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';

import './styles.css';

const MovieDetails = () => {
  return (
    <>
      <Navbar />
      <div className="movie-details-container">
        <h1>Tela detalhes do filme id: 1</h1>
        <div>
          <ReviewForm />
        </div>
        <div>
          <ReviewListing />
          <ReviewListing />
          <ReviewListing />
          <ReviewListing />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
