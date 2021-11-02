import React, { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function AddModal({ addMovie }) {
  const [show, setShow] = useState(false);

  const [add, setAdd] = useState({
    Title: "",
    Year: "",
    Poster: "",
    rating: 0,
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const ratingChanged = (newRating) => {
    setAdd({ ...add, rating: newRating });
  };

  return (
    <div>
      <div className="add">

      <Form>
        <Form.Group >
          <Form.Label className=' add-m'>Add movie</Form.Label>

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            onChange={handleChange}
            name="Title"
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter URL"
            onChange={handleChange}
            name="Poster"
          />
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="date"
            placeholder="../../...."
            onChange={handleChange}
            name="Year"
          />
        </Form.Group>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />

        <Link to="/">
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
        </Link>
        <Link to="/">
          <Button
            onClick={() => {
              addMovie(add);
              handleClose();
            }}
            variant="primary"
          >
            Add movie
          </Button>
        </Link>
      </Form>
      </div>
    </div>
  );
}

export default AddModal;