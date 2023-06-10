import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Search from "./components/Search";
import axios from "axios";


function App() {
  const [searchResult, setSearchResult] = useState()
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

  useEffect(() => {
    console.log(searchResult)
  }, [searchResult])

  return (
    <>
    <div className="App">
      <Nav />
      <Search setSearchResult={setSearchResult} fetchMovies={fetchMovies}/>
      <Results movies={movies} loading={loading}/>
    </div>
    </>
  );
}

export default App;
