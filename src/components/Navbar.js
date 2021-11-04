import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          {user ? `Hola ${user.name}` : `Bienvenido`}
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            cerrar sesion
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            iniciar sesion
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
