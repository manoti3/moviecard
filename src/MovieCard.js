import React from "react";
import "./MovieCard.css";

const MovieCard = ({ poster, title, year, rating }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />

      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">📅 {year}</p>
        <p className="movie-rating">⭐ {rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;