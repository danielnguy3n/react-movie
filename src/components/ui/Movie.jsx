import React from "react";

export default function Movie({movie}) {
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img className="movie__img" src={movie.Poster} alt="" />
      </figure>
      <h2 className="movie__title">{movie.Title}</h2>
      <p className="movie__year">{movie.Year}</p>
    </div>
  );
}
