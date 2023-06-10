import React, { useEffect, useState } from "react";
import Movie from "./ui/Movie";

export default function Results({movies, loading}) {

  return (
    <section className="results">
      <div className="row">
        <div className="results__container">
          <div className="results__header">
            <h1 className="search-results">Trending Movies</h1>
            <select id="filter">
              {/* <option value="start" disabled selected>Sort</option> */}
              <option value="NEWEST-OLDEST">Newest to Oldest</option>
              <option value="OLDEST-NEWEST">Oldest to Newest</option>
            </select>
          </div>
          <div className="movie-list">
            {loading ? (
              <>
                {new Array(8).fill(0).map((_, index) => (
                  <div className="movie" key={index}>
                    <div className="skeleton movie__skeleton--img"></div>
                    <div className="skeleton movie__skeleton--title"></div>
                    <div className="skeleton movie__skeleton--year"></div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {movies
                  .map((movie, index) => <Movie movie={movie} key={index} />)
                  .slice(0, 8)}
              </>
            )}
            {}
          </div>
        </div>
      </div>
    </section>
  );
}
