import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Home from "./components/pages/Home";
import MovieInfo from "./components/pages/MovieInfo";

function App() {
  const [searchResult, setSearchResult] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState()

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=42f4673d&s=${searchResult}&page=${page}`
    );
    setMovies(data.Search);
    setLastPage(Math.ceil(data.totalResults / 10))
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} setPage={setPage}/>}/>
            <Route path={`/search/`} element={<Search searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} movies={movies} loading={loading} setPage={setPage}/>}/>
            <Route path={`/search/:result`} element={<Search searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} movies={movies} loading={loading} page={page} setPage={setPage} lastPage={lastPage}/>}/>
            <Route path={`/search/:result/:movieID`} element={<MovieInfo searchResult={searchResult}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
