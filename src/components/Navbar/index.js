import { Link } from "react-router-dom";

import "./index.css";

const Navbar = ({ setSearchInput, searchInput, getSearchResults }) => {
  return (
    <nav className="nav-container">
      <Link to="/" className="link">
        <h1 className="logo">MoviesDB</h1>
      </Link>

      <div className="links-search-container">
        <ul className="link-container">
          <Link to="/" className="link">
            <li>Popular</li>
          </Link>
          <Link to="/top-rated-movies" className="link">
            <li>Top Rated</li>
          </Link>
          <Link to="/upcoming-movies" className="link">
            <li>Upcoming</li>
          </Link>
        </ul>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Link to={`/search-page/:${searchInput}`}>
            <button className="search-button" onClick={getSearchResults}>
              Search
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
