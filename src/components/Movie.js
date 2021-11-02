import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Rating from "@material-ui/lab/Rating";

import { Link } from "react-router-dom";

const Movie = ({ movie, ratingChanged }) => {
  return (
    <div className="movie-all">
      <div className="movie">
        {movie.map((movie) => (
           <Link to={`/description/${movie.id}`}>
          <Card className="row" style={{ width: "18rem" }}>
            <div>
              {/* <Rating name="read-only" value={movie.rating} readOnly /> */}
              <Card.Img className="img" variant="top" src={movie.Poster} />
            </div>
            <Card.Body>
              <p>
                {movie.Title}({movie.Year}){" "}
              </p>

            </Card.Body>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movie;