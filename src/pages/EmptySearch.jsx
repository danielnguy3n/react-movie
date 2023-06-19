import React, { useEffect } from "react";
import Searchbar from "../components/Searchbar";

export default function EmptySearch({
  searchResult,
  setSearchResult,
  fetchMovies,
}) {
  useEffect(() => {
    setSearchResult([])
    console.log(searchResult)
  }, [])

  const result = searchResult

  return (
    <>
      <Searchbar
        searchResult={result}
        setSearchResult={setSearchResult}
        fetchMovies={fetchMovies}
      />
      <section className="results">
          <div className="row">
            <div className="results__container">
              No movies
            </div>
          </div>
        </section>
    </>
  );
}
