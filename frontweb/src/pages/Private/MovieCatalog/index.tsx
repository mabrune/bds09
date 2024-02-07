import ReviewCard from 'components/ReviewCard';

import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <h1>Tela Listagem de filmes</h1>
      <div className="catalog-content">
        <ReviewCard />
      </div>
    </div>
  );
};

export default MovieCatalog;
