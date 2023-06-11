import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function RenderMovieInfo({movieInfo}) {
  function styleString(string) {
    let items = string?.split(",");
    return items?.map((item, index) => (
      <span key={index} className="bubble">
        {" "}
        {item}{" "}
      </span>
    ));
  }

  return (
    <div className="movie__selected">
      <figure className="movie__selected--figure">
        <img src={movieInfo.Poster} alt="" className="movie__selected--img" />
      </figure>
      <div className="movie__selected--desc">
        <h1 className="movie__selected--title">{movieInfo.Title}</h1>
        <div className="movie__selected--subcontainer">
          <div className="movie__selected--info">
            <p className="movie__selected--director">
              {movieInfo.Director?.toUpperCase()}
            </p>
            <p className="movie__selected--genre">
              {styleString(movieInfo.Genre)}
            </p>
          </div>
          <div className="imdb">
            <p className="movie__selected--rating">
              <span className="imdb-rating">
                <FontAwesomeIcon icon="star" className="star" />
                {movieInfo.imdbRating}
              </span>{" "}
              / 10.0
            </p>
            <p className="movie__selected--votes">
              {movieInfo.imdbVotes} Votes
            </p>
          </div>
        </div>
        <p className="movie__selected--misc">
          {movieInfo.Year} · {movieInfo.Rated} · {movieInfo.Runtime}
        </p>
        <h3 className="movie__selected--subheaders">Actors</h3>
        <p className="movie__selected--actors">
          {styleString(movieInfo.Actors)}
        </p>
        <h3 className="movie__selected--subheaders">Plot</h3>
        <p className="movie__selected--plot">{movieInfo.Plot}</p>
      </div>
    </div>
  );
}
