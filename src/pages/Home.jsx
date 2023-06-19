import React from "react";
import homeImg from "../assets/home.svg";
import Searchbar from "../components/Searchbar";

export default function Home({
  searchResult,
  setSearchResult,
  fetchMovies,
  setPage,
}) {
  return (
    <section id="home">
      <div className="row">
        <div className="home__container">
          <div className="home__header">
            <h1 className="home__title--large">
              The World's Largest Movie Database
            </h1>
            <Searchbar
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              fetchMovies={fetchMovies}
              setPage={setPage}
            />
          </div>
          <figure className="home__img--wrapper">
            <img src={homeImg} alt="" className="home__img" />
          </figure>
        </div>
      </div>
    </section>
  );
}
