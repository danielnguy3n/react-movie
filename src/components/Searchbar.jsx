import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Searchbar({
  searchResult,
  setSearchResult,
  fetchMovies,
  setPage,
}) {
  let navigate = useNavigate();
  const [spinnerLoading, setSpinnerLoading] = useState();
  const ref = useRef();

  function validateResult() {
    if (searchResult.length < 3) {
      alert("Keyword must be at least 3 characters");
    } else {
      fetchMovies()
    }
  }

  function searchAction(event) {
    setSpinnerLoading(true);
    setTimeout(() => {
      validateResult();

      event.target.blur();

      setSpinnerLoading(false);

      setPage(1);

      ref.current.value = "";

      navigate(`/search/${searchResult}`);
    }, 500);
  }

  return (
    <section className="search">
      <div className="row">
        <div className="container">
          <h1 className="browse">
            Browse our <span className="colour-text">catalogue</span>
          </h1>
          <div className="search__bar">
            <input
              className="search__input"
              type="text"
              placeholder="Search by Title"
              ref={ref}
              onChange={(event) => setSearchResult(event.target.value)}
              onKeyDown={(event) =>
                event.key === "Enter" && searchAction(event)
              }
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
