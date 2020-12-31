import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovies = ({ addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>posterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the movie posterUrl"
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the movie description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the movierate"
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie(title, posterUrl, description, rate);
              setShow(false);
            }}
          >
            Add movie bro
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovies;
