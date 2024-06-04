import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import CastCard from "../CastCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
const apiKey = "c45a857c193f6302f2b5061c3b85e743";

const MovieDetailPage = (props) => {
  const params = useParams();
  const { id } = params;

  const [movieDetail, setMovieDetail] = useState({});
  const [castList, setCastList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const imageBaseDomain = "https://image.tmdb.org/t/p/w500";

  //fetching cast list
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
    axios
      .get(url)
      .then((res) => setCastList(res.data.cast))
      .then((error) => {
        if (error) {
          setError(error);
        }
      });
  }, [id]);

  //fetching movie deails
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        setMovieDetail(res.data);
        setGenres(res.data.genres);
      })
      .then((error) => {
        if (error) {
          setError(error.message);
        }
      });
  }, [id]);
  const genresNames = genres.map((each) => {
    return each.name;
  });

  const RenderMovieDetails = () => {
    return (
      <>
        <Navbar setSearchInput={setSearchInput} searchInput={searchInput} />
        <div className="detail-page-container">
          <div className="detail-container">
            <div>
              <div className="name-logo-container">
                <img
                  src={imageBaseDomain + movieDetail.poster_path}
                  alt={movieDetail.title}
                  className="card-image"
                />
                <div className="name-container">
                  <h1>{`${movieDetail.title}:${movieDetail.tagline}`}</h1>
                  <p className="rating-genres">{`Rating: ${
                    Math.round(movieDetail.vote_average * 10) / 10
                  }`}</p>
                  <p>
                    <span className="runtime">{`${movieDetail.runtime} min`}</span>
                    <span className="rating-genres">
                      {" "}
                      {genresNames.join(",")}
                    </span>
                  </p>
                  <p className="release-date">{`Release Date: ${movieDetail.release_date}`}</p>
                </div>
              </div>
              <div className="overview-container">
                <h1>Overview</h1>
                <p>{movieDetail.overview}</p>
              </div>
            </div>
            <img
              src={imageBaseDomain + movieDetail.backdrop_path}
              alt={movieDetail.title}
              className="detail-page-image"
            />
          </div>

          <h2 className="cast-heading">Cast</h2>
          <ul className="cast-list-container">
            {castList.map((each) => (
              <CastCard key={each.id} item={each} />
            ))}
          </ul>
          {error && <p>{error}</p>}
        </div>
      </>
    );
  };
  return RenderMovieDetails();
};

export default MovieDetailPage;
