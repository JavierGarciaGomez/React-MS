import React from "react";
import { MovieT } from "../interfaces/interfaces";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

type Props = {
  movies: MovieT[];
};

export const MoviesList = (props: Props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
