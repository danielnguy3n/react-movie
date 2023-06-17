import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Movie({ movie }) {
  const {result} = useParams()
  return (
    <Link to={`/search/${result}/${movie.imdbID}`} className="movie">
        <figure className="movie__img--wrapper">
          <img className="movie__img" src={movie.Poster} alt="" />
        </figure>
        <h2 className="movie__title">{movie.Title}</h2>
        <p className="movie__year">{movie.Year}</p>
      {/* </div> */}
    </Link>
  );
}
