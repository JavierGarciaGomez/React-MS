import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { MoviesList } from "./components/MoviesList";

type reqErrorState = null | string;

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState<reqErrorState>(null);

  const handleFetchMovies = useCallback(async () => {
    setIsLoading(true);
    setReqError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      const transformedMovies = await data.results.map((movieData: any) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));

      await setMovies(transformedMovies);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setReqError(message);
    }
    setIsLoading(false);

    // fetch("https://swapi.dev/api/films/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const transformedMovies = data.results.map((movieData: any) => ({
    //       id: movieData.episode_id,
    //       title: movieData.title,
    //       openingText: movieData.opening_crawl,
    //       releaseDate: movieData.release_date,
    //     }));
    //     setMovies(transformedMovies);
    //     return transformedMovies;
    //   })
    //   .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (reqError) {
    content = <p>{reqError}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={handleFetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <section>{content}</section>
      </section>
    </React.Fragment>
  );
}

export default App;
