import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopularMoviesPage from "./components/PopularMoviesPage";
import TopRatedMoviesPage from "./components/TopRatedMoviesPage";
import UpcomingMoviesPage from "./components/UpcomingMoviesPage";
import MovieDetailPage from "./components/MovieDetailPage";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMoviesPage />} />
        <Route path="/top-rated-movies" element={<TopRatedMoviesPage />} />
        <Route path="/upcoming-movies" element={<UpcomingMoviesPage />} />
        <Route path="/movie-detail-page/:id" element={<MovieDetailPage />} />
        <Route path="/search-page/:search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
