import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieProvider from "./context/MovieProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <Navbar />
        <MovieList />
      </MovieProvider>
    </UserProvider>
  );
}

export default App;
