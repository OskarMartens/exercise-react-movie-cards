import React from "react";
import { IMovie } from "../../interface";
import "./MovieCard.css";

interface IMovieProp {
  data: IMovie;
  removeMovie: () => void;
}

export default function MovieCard({ data, removeMovie }: IMovieProp) {
  return (
    <div className="movie-card-main" onClick={removeMovie}>
      <section className="top">
        <p>{data.title}</p>
        <p>{data.rating} / 5</p>
      </section>
      <section className="middle">
      {data.genre}

      </section>
      {data.description}
    </div>
  );
}
