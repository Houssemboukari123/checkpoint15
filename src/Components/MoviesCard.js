import React from "react";
import { Card } from "react-bootstrap";

const MoviesCard = ({ movie }) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <p className="star">{"".padStart(movie.rate, "⭐")}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
