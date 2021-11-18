import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  // 178
  const [isLoading, setisLoading] = useState(false);
  // 179 handling errors
  const [error, seterror] = useState(null);

  // const fetchMoviesHandler = () => {

  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // transforming the data
  //       const transformedMovies = data.results.map((movie) => {
  //         const id = movie.episode_id;
  //         const title = movie.title;
  //         const releaseDate = movie.created;
  //         const openingText = movie.opening_crawl;

  //         return { id, title, releaseDate, openingText };
  //       });

  //       setmovies(transformedMovies);
  //     });
  // };

  // 177
  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true);
    seterror(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      // const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("oh no, an error");
      }
      const data = await response.json();

      const transformedMovies = await data.results.map((movie) => {
        const id = movie.episode_id;
        const title = movie.title;
        const releaseDate = movie.created;
        const openingText = movie.opening_crawl;

        return { id, title, releaseDate, openingText };
      });

      setmovies(transformedMovies);
    } catch (error) {
      seterror(error.message);
    }
    setisLoading(false);
  }, []);

  // 180 useEffect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? <p> Loading... </p> : <MoviesList movies={movies} />}
        {error && <p>ERROR {error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
