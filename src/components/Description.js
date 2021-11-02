import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Description = ({ movie, match }) => {
  const film = movie.find((el) => Number(el.id) === Number(match.params.id));
  return (
    <div className="fomulair">
      <iframe
        className="video"
        width="360"
        height="300"
        justify-content="center"
        src={film.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>{film.desc} </h3>
      <Link to="/">
        <Button className="goback" variant="primary">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Description;