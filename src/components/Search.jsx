import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ setSearchResult, fetchMovies }) {
  const [spinnerLoading, setSpinnerLoading] = useState();

  function searchAction(event) {
    setSpinnerLoading(true);
    setTimeout(() => {
      fetchMovies();
      event.target.blur();
      setSpinnerLoading(false);
    }, 1000);
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
              onKeyDown={(event) => event.key === "Enter" && searchAction(event)}
            />
            {spinnerLoading ? (
              <>
                <FontAwesomeIcon
                  icon="circle-notch"
                  className="search__spinner"
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon="magnifying-glass"
                  className="search__icon"
                  onClick={(event) => searchAction(event)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
