import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Contribute.css";

const Contribute = () => {
  // Insert a New Meme
  const [newMeme, setNewMeme] = useState({
    username: "",
    caption: "",
    url: "",
  });

  // Updating the data from form in State
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { username, caption, url } = newMeme;

    const meme = {
      username,
      caption,
      url,
    };

    // Sending data to the database
    axios
      .post("http://localhost:5000/memes", meme)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // Clearing form field after submission
    document.getElementById("username").value = "";
    document.getElementById("caption").value = "";
    document.getElementById("url").value = "";
  }

  return (
    <div>
      <Form
        className="form"
        onSubmit={handleSubmit}
        method="POST"
        action="/memes"
        id="shareMeme"
      >
        <Form.Group>
          <Form.Label>Meme Owner</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Caption</Form.Label>
          <Form.Control
            type="text"
            name="caption"
            id="caption"
            placeholder="Caption"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Meme URL</Form.Label>
          <Form.Control
            type="url"
            name="url"
            id="url"
            placeholder="Enter Meme URL"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button name="submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contribute;
