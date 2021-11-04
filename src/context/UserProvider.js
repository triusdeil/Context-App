import React, { useState } from "react";
import UserContext from "./UserContext";

const initialUser = { id: 1, name: "luis", favoriteMovies: [1, 2] };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleAlertFavoriteMovie = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((favMovId) => favMovId !== movieId) //delete
      : [...user.favoriteMovies, movieId]; //add

    setUser({
      ...user,
      favoriteMovies,
    });
  };

  const data = { user, login, logout, toggleAlertFavoriteMovie };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
