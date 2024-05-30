import { Link } from "react-router-dom";
import "./index.css";

const MovieCard = ({ item }) => {
  const { id, title, poster_path, vote_average } = item;
  const imageBaseDomain = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to={`/movie-detail-page/${id}`} className="link">
      <li className="movie-card-container">
        <img
          src={imageBaseDomain + poster_path}
          alt={title}
          className="card-image"
        />
        <p>{title}</p>
        <p>{`Ratings: ${Math.round(vote_average * 10) / 10}`}</p>
      </li>
    </Link>
  );
};

export default MovieCard;
