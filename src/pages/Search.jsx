import React from "react";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import { useParams } from "react-router-dom";
import logo from "../assets/search.svg";

export default function Search({
  searchResult,
  setSearchResult,
  fetchMovies,
  movies,
  loading,
  page,
  setPage,
  lastPage,
  notFound
}) {
  const params = useParams();
  return (
    <>
      <Searchbar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        fetchMovies={fetchMovies}
        setPage={setPage}
      />
      {Object.keys(params).length ? (
        <Results
          searchResult={searchResult}
          movies={movies}
          loading={loading}
          page={page}
          setPage={setPage}
          lastPage={lastPage}
          fetchMovies={fetchMovies}
          notFound={notFound}
        />
      ) : (
        <section className="results">
          <div className="row">
            <div className="container">
              <figure className="search__img--wrapper">
                <img src={logo} alt="" className="search__img" />
              </figure>
              <h1 className="browse">
                Type in the search box to find a movie!
              </h1>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
