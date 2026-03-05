import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://via.placeholder.com/300x450?text=Inception"
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://via.placeholder.com/300x450?text=Dark+Knight"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    poster: "https://via.placeholder.com/300x450?text=Interstellar"
  }
];

function App() {
  return (
    <div className="app">
      <h1>Movie List</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;