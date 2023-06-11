import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RenderMovieInfo from "../ui/RenderInfo";

export default function MovieInfo() {
  const { result, movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=42f4673d&i=${movieID}&plot=full`
    );
    setMovieInfo(data);
  }

  useEffect(() => {
    fetchMovieInfo();
    console.log(movieInfo);
    console.log(movieInfo.Actors)
  }, []);

  return (
    <section id="movie__info">
      <div className="movie__container">
        <div className="row movie__row">
          <div className="movie__selected--top">
            <Link to={`/search/${result}`}>
              <FontAwesomeIcon icon="arrow-left" className="movie__selected--arrow--top"/>
            </Link>
            <Link to={`/search/${result}`}>
              <h2 className="movie__selected--title--top">Back</h2>
            </Link>
          </div>
          <RenderMovieInfo movieInfo={movieInfo} />
        </div>
      </div>
    </section>
  );
}
