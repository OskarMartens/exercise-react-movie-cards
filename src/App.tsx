import { useState } from "react";
import AddMovie from "./components/AddMovie/AddMovie";
import { IMovie } from "./interface";
import MovieCard from "./components/MovieCard/MovieCard";
import "./index.css";

export function App() {
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[]);

  const addMovie = (newMovie: IMovie) => {
    setMovies([...movies, newMovie]);
  };

  const removeMovie = () => {
    const movieToRemove: IMovie = movies[0];
    setMovies(movies.filter((item) => item !== movieToRemove));
  };

  const renderMovieCard =
    movies.length > 0 ? (
      <MovieCard data={movies[0]} removeMovie={removeMovie} />
    ) : (
      <div>No movies found</div>
    );

  return (
    <>
      <main className="main-content">
        <AddMovie setFunction={addMovie} />
        <div className="movie-card">{renderMovieCard}</div>
      </main>
    </>
  );
}
