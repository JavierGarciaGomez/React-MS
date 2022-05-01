import React from "react";

import classes from "./Movie.module.css";
import { MovieT } from "../interfaces/interfaces";

type Props = { movie: MovieT };
const Movie = ({ movie }: Props) => {
  const { openingText, title, releaseDate } = movie;
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
