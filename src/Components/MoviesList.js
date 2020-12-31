import React, { useState } from "react";
import MoviesCard from "./MoviesCard";
import { Form } from "react-bootstrap";
import { starTab } from "./Data";

const MoviesList = ({ movieList }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [starList, setStarList] = useState(starTab);
  const changeColor = (id) =>
    setStarList(
      starList.map((el) =>
        el.id === id
          ? { icon: el.icon, isColored: !el.isColored, id: el.id }
          : el
      )
    );
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Form.Control
          type="text"
          placeholder="Normal text"
          className="col-md-7"
          onChange={handleSearch}
        />
        <div>
          {starList.map((el) => (
            <span
              className={el.isColored ? "colored-star" : "star2"}
              key={el.id}
              onClick={() => changeColor(el.id)}
            >
              {el.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        {movieList
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .filter(
            (movie) =>
              movie.rate >=
              starList.filter((el) => el.isColored === true).length
          )
          .map((movie, index) => (
            <MoviesCard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
