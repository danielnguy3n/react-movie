import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RenderMovieInfo from "../ui/RenderInfo";
import SkeletonInfo from "../ui/SkeletonInfo";

export default function MovieInfo() {
  const { result, movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState()

  async function fetchMovieInfo() {
    setLoading(true)
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=42f4673d&i=${movieID}&plot=full`
    );
    setMovieInfo(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <section id="movie__info">
      <div className="movie__container">
        <div className="row movie__row">
          <div className="movie__selected--top">
            <Link to={`/search/${result}`}>
              <FontAwesomeIcon
                icon="arrow-left"
                className="movie__selected--arrow--top"
              />
            </Link>
            <Link to={`/search/${result}`}>
              <h2 className="movie__selected--title--top">Back</h2>
            </Link>
          </div>
          {
            loading ? <SkeletonInfo /> : <RenderMovieInfo movieInfo={movieInfo} />
          }
        </div>
      </div>
    </section>
  );
}
