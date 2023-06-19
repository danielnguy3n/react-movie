import React from "react";
import Movie from "./ui/Movie";
import PageBtns from "./ui/PageBtns";
import noResults from "../assets/noresult.svg"

export default function Results({
  searchResult,
  movies,
  loading,
  page,
  setPage,
  lastPage,
  notFound,
}) {
  return (
    <section className="results">
      <div className="row">
        <div className="results__container">
          {notFound ? (
            <div className="no-results">
              <h2 className="no-results__header">
                No results found. Please try another word!
              </h2>
              <figure className="no-results__img--wrapper">
                <img src={noResults} alt="" className="no-results__img" />
              </figure>
            </div>
          ) : (
            <>
              <div className="results__header">
                <h1 className="search-results">
                  Search results for{" "}
                  <span className="colour-text"> "{searchResult}" </span>
                </h1>
                <PageBtns page={page} setPage={setPage} lastPage={lastPage} />
              </div>
              <div className="movie-list">
                {loading ? (
                  <>
                    {new Array(10).fill(0).map((_, index) => (
                      <div className="movie" key={index}>
                        <div className="skeleton movie__skeleton--img"></div>
                        <div className="skeleton movie__skeleton--title"></div>
                        <div className="skeleton movie__skeleton--year"></div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {movies.map((movie, index) => (
                      <Movie movie={movie} key={index} />
                    ))}
                  </>
                )}
              </div>
              <div className="results__footer">
                <PageBtns page={page} setPage={setPage} lastPage={lastPage} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
