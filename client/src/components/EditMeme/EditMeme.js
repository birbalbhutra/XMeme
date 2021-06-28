import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "./EditMeme.css";

const EditMeme = (_id) => {
  //   Insert a New Meme
  const [newValue, setNewValue] = useState({});

  // Getting id from props
  const id = _id.match.params.id;

  // Getting the whole object using get request
  axios
    .get("http://localhost:5000/memes/" + id)
    .then((res) => setNewValue(res.data));

  const [newMeme, setNewMeme] = useState({
    username: newValue.username,
    caption: newValue.caption,
    url: newValue.url,
  });

  // Updating the data from form in State
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();
    // Not updating username
    const username = newValue.username;
    let caption = newMeme.caption;
    if (newMeme.caption === undefined) {
      caption = newValue.caption;
    }

    let url = newMeme.url;
    if (newMeme.url === undefined) {
      url = newValue.url;
    }
    // const { caption, url } = newMeme;

    const meme = {
      username,
      caption,
      url,
    };

    console.log(meme);
    // Sending data to the database
    axios
      .post("http://localhost:5000/update/" + id, meme)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/memes";
  }

  return (
    <div>
      <Form className="form" onSubmit={handleEdit} method="POST" id="shareMeme">
        <Form.Group>
          <Form.Label>Caption</Form.Label>
          <Form.Control
            type="text"
            name="caption"
            id="caption"
            defaultValue={newValue.caption}
            placeholder="Edit Caption"
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
            defaultValue={newValue.url}
            placeholder="Edit Meme URL"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button name="submit" variant="primary" type="submit">
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditMeme;
