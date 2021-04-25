const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const Meme = require("./models").Meme;

// MongoDB setup
const mongoDB = "mongodb://localhost:27017/memeDB";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

let count = 1;

const PORT = process.env.PORT || 5000;

app.use(express.json());

// GET method for fetching all the memes
app.get("/memes", (req, res) => {
  Meme.find()
    .then((memes) => res.json(memes))
    .catch((err) => res.status(400).json("Error:" + err));
});

// valid image url for testing
// https://www.lifesize.com/wp-content/uploads/2020/10/Meme-header-2.jpeg

// POST method for adding new memes
app.post("/memes", (req, res) => {
  req.body.id = count;
  count = count + 1;
  let username = req.body.username;
  let caption = req.body.caption;
  let id = req.body.id;
  let url = req.body.url;
  const newMeme = new Meme({ id, username, caption, url });

  newMeme
    .save()
    .then(() => res.json("Meme added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// app.patch("/memes/:id", (req, res) => {
//   let id = req.params.id;
//   Meme.findById({ id: id })
//     .then((meme) => {
//       meme.id = id;
//       meme.username = req.body.username;
//       meme.caption = req.body.caption;
//       meme.url = req.body.url;

//       meme
//         .save()
//         .then(() => res.json("Meme updated"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// DELETE method to delete a meme
app.delete("/memes/:id", (req, res) => {
  let id = req.params.id;
  Meme.deleteOne({ id: id })
    .then(() => res.json("Data deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
