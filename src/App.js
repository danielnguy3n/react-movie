import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Results from "./components/Results";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Search from "./components/pages/Search";
import Home from "./components/pages/Home";
import MovieInfo from "./components/pages/MovieInfo";

function App() {
  const [searchResult, setSearchResult] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=42f4673d&s=${searchResult}`
    );
    setMovies(data.Search);
    setLoading(false);
  }

  // useEffect(() => {
  //   console.log(searchResult);
  //   console.log(movies)
  // }, [searchResult, movies]);

  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* When you press enter re route to `/search/:${searchResult}` */}
            <Route path={`/search`} element={<Search searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} movies={movies} loading={loading}/>}/>
            <Route path={`/search/:result`} element={<Search searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} movies={movies} loading={loading}/>}/>
            <Route path={`/search/:result/:movieID`} element={<MovieInfo searchResult={searchResult}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
