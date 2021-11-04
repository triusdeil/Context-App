import React from "react";
import initialMovies from "../consts/initialMovie";
import MoviesContext from "./MoviesContext";

const MovieProvider = ({ children }) => {
  const data = { movies: initialMovies };
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MovieProvider;
