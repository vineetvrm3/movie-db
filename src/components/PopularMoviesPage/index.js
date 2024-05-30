import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import MovieCard from "../MovieCard";
import "./index.css";

const apiConstants = {
  loading: "LOADING",
  success: "SUCCESS",
  failed: "FAILED",
};

const PopularMoviesPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState(apiConstants.loading);
  const [currentPage, setCurrentPages] = useState(1);
  const [userPageInput, setUserPageInput] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const apiKey = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;
    axios
      .get(url)
      .then((res) => {
        setPopularMovies(res.data);
        setApiStatus(apiConstants.success);
      })
      .then((error) => {
        if (error) {
          setError(error.message);
          setApiStatus(apiConstants.failed);
        }
      });
  }, [currentPage]);

  const getMoviesCard = () => {
    return (
      <ul className="movies-card-container">
        {popularMovies.results.map((each) => (
          <MovieCard key={each.id} item={each} />
        ))}
      </ul>
    );
  };

  const finalRender = () => {
    switch (apiStatus) {
      case apiConstants.loading:
        return <TailSpin />;
      case apiConstants.success:
        return getMoviesCard();
      case apiConstants.failed:
        return <p>{error}</p>;
      default:
        return null;
    }
  };

  const getSearchResults = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=${currentPage}`;
    axios
      .get(url)
      .then((res) => setPopularMovies(res.data))
      .then((error) => {
        if (error) {
          setError(error.message);
        }
      });
  };

  return (
    <>
      <Navbar
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        getSearchResults={getSearchResults}
      />
      <div className="popular-movie-container">{finalRender()}</div>
      <div className="page-container">
        <button
          type="button"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPages((prev) => prev - 1);
            }
          }}
        >
          Previous
        </button>
        <p>{`${currentPage} / ${popularMovies.total_pages}`}</p>
        <button
          onClick={() => {
            if (currentPage < popularMovies.total_pages) {
              setCurrentPages((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>

        <p>Or Jump to Page</p>
        <input
          onChange={(e) => {
            setUserPageInput(e.target.value);
          }}
          value={userPageInput}
        />
        <button
          onClick={() => {
            setCurrentPages(userPageInput);
          }}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default PopularMoviesPage;
