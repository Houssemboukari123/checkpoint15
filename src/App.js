import "./App.css";
import React, { useState } from "react";
import MoviesList from "./Components/MoviesList";
import { moviesList } from "./Components/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovies from "./Components/AddMovies";

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const addMovie = (title, posterUrl, description, rate) => {
    setMovieList([
      ...movieList,
      { title: title, posterUrl: posterUrl, description: description },
    ]);
  };
  return (
    <div className="container">
      <MoviesList movieList={movieList} />
      <AddMovies addMovie={addMovie} />
    </div>
  );
}

export default App;
