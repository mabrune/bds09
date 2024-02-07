import './styles.css';

const ReviewForm = () => {
  return (
    <div className="base-card review-form-container">
      <form action="">
        <input
          type="text"
          placeholder="Deixe sua avaliação aqui"
          name="comment"
        />
      </form>
      <div className="button-container">
        <button className="btn btn-primary form-btn-icon">
          <p>SALVAR AVALIAÇÃO</p>
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
