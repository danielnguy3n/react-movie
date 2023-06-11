import React from "react";
import Searchbar from "../Searchbar";
import Results from "../Results";

export default function Search({searchResult, setSearchResult, fetchMovies, movies, loading}) {
  return (
    <>
      <Searchbar searchResult={searchResult} setSearchResult={setSearchResult} fetchMovies={fetchMovies} />
      <Results movies={movies} loading={loading} />
    </>
  );
}
