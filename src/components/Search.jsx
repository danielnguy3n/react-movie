import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({setSearchResult, fetchMovies}) {
  function onEnter(event) {
    fetchMovies()
    event.target.blur()
  }  

  return (
    <section className="search">
      <div className="row">
        <div className="container">
          <h1 className="browse">Browse our catalogue</h1>
          <div className="search__bar">
            <input
              className="search__input"
              type="text"
              placeholder="Search by Title"
              onChange={(event) => setSearchResult(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && onEnter(event)}
            />
            <FontAwesomeIcon icon="magnifying-glass" className="search__icon" onClick={fetchMovies}/>
          </div>
        </div>
      </div>
    </section>
  );
}
