import "./App.css";
import { useState } from "react";
import Movie from "./components/Movie";
import { Form, FormControl } from "react-bootstrap";
import AddModal from "./components/AddModal";
import ReactStars from "react-rating-stars-component";
// import { BrowserRouter, Link, Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Description from "./components/Description";
import {movies} from './components/Date'
import { Link } from "react-router-dom";

function App() {
  const [movie, setmovie] = useState(movies);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [textFilter, setTextFilter] = useState("");

  const addMovie = (newMovie) => {
    setmovie([...movie, newMovie]);
  };

  const ratingChanged = (newRating) => {
    setRatingFilter(newRating);
    console.log(ratingFilter);
  };

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  return (
    <div className="App">
      <div className="search">
        <div className="top">
          <p>BATTYWOOD</p>
          <div className="btn">
          <Link  to='/addmodal' >Add New Movie</Link>
          </div>
        </div>

        <div>
          <div className="my-search">
            <Form className="search-in">
              <div>
                <FormControl
                  type="search"
                  placeholder="Taper your search"
                  className=""
                  aria-label="Search"
                  onChange={handleChange}
                />

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </Form>
          </div>


        </div>
        <Switch>
        <Route exact  path='/' render={()=> (<div>
          <Movie
            ratingChanged={ratingChanged}
            movie={movie.filter(
              (el) =>
                el.Title.toLowerCase().includes(
                  textFilter.toLowerCase().trim()
                ) && el.rating >= ratingFilter
            )}
          />
        </div>)}/>
              <Route
                exact
                path="/description/:id"
                render={(props) => <Description movie={movie} {...props} />}
              ></Route>
              <Route exact path="/addmodal" >
                <AddModal addMovie={addMovie} />
              </Route>

            </Switch>
      </div>

    </div>
  );
}

export default App;