import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import "./AddMovie.css";
import { IMovie } from "../../interface";
import data from "../../data/genre.json";

type PropsFunctionType = {
  setFunction: (movie: IMovie) => void;
};

export default function AddMovie({ setFunction }: PropsFunctionType) {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (
      title.length > 0 &&
      rating.length > 0 &&
      genre.length > 0 &&
      description.length > 0
    ) {
      const newMovie: IMovie = { title, rating, genre, description };
      setFunction(newMovie);
    } else {
      alert("The values are not correct");
    }
  };

  const handleTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleRating: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setRating(e.target.value);
  };

  const handleGenre: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  const handleDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <form className="add-movie-main" onSubmit={handleOnSubmit}>
      <section className="section">
        <label className="title">Title</label>
        <input type="text" className="title-input" onChange={handleTitle} />
      </section>
      <section className="section">
        <label className="title">Rating</label>
        <p>1</p>
        <input
          type="range"
          min="1"
          max="5"
          className="slider"
          onChange={handleRating}
        />
        <div className="rating">
          {rating}
          <p>/ 5</p>
        </div>
      </section>
      <section className="section">
        <label className="genre">Genre</label>
        <select value={genre} onChange={handleGenre}>
          {data.map((option) => (
            <option>{option.value}</option>
          ))}
        </select>
      </section>
      <section className="section">
        <label className="">Description</label>
        <textarea className="desc-input" rows={5} cols={33} onChange={handleDescription} />
      </section>
      <button type="submit" className="movie-submit">Add</button>
    </form>
  );
}
