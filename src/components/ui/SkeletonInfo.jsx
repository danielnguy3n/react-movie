import React from "react";

export default function SkeletonInfo() {
  return (
    <div className="movie__selected">
      <div className="skeleton movie-select__skeleton--img"></div>
      <div className="movie-select__skeleton--desc">
        <div className="skeleton movie-select__skeleton--title"></div>
        <div className="movie-select__skeleton--subcontainer">
          <div>
            <div className="skeleton movie-select__skeleton--subtitle"></div>
            <div className="skeleton movie-select__skeleton--small"></div>
            <div className="skeleton movie-select__skeleton--small"></div>
            <div className="skeleton movie-select__skeleton--small"></div>
          </div>
          <div>
            <div className="skeleton movie-select__skeleton--right"></div>
            <div className="skeleton movie-select__skeleton--right"></div>
          </div>
        </div>
        <div className="skeleton movie-select__skeleton--text--small"></div>
        <div className="skeleton movie-select__skeleton--subtitle"></div>
        <div>
          <div className="skeleton movie-select__skeleton--small"></div>
          <div className="skeleton movie-select__skeleton--small"></div>
          <div className="skeleton movie-select__skeleton--small"></div>
        </div>

        <div className="skeleton movie-select__skeleton--subtitle"></div>
        <div className="skeleton movie-select__skeleton--para"></div>
      </div>
    </div>
  );
}
