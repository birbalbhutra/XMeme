import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import "./Content.css";

const Content = () => {
  const [memes, setMemes] = useState([]);

  // Getting all the memes from database and updating in frontend
  axios.get("http://localhost:5000/memes").then((res) => setMemes(res.data));

  // Delete Meme
  function handleDelete(memeId) {
    axios
      .delete("http://localhost:5000/memes/" + memeId)
      .then((res) => console.log(res.data));

    const newMemes = memes.filter((meme) => meme.id !== memeId);
    setMemes(newMemes);
  }

  // For showing latest meme first
  memes.reverse();

  // React Cards for showing the memes
  function listCards() {
    return memes.map((meme) => {
      return (
        <Card className="card-background" key={meme.id}>
          <Card.Img variant="top" alt="meme" src={meme.url} />
          <Card.Body>
            <Card.Title className="username">{meme.username}</Card.Title>

            <Card.Text className="caption">{meme.caption}</Card.Text>
            <Button onClick={() => handleDelete(meme.id)} variant="primary">
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }

  return (
    <div className="card-container">
      <CardColumns>{listCards()}</CardColumns>
    </div>
  );
};

export default Content;
