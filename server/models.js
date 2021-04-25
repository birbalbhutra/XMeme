const mongoose = require("mongoose");

const memeSchema = mongoose.Schema({
  id: String,
  username: String,
  caption: String,
  url: String,
});

exports.Meme = mongoose.model("Meme", memeSchema);
