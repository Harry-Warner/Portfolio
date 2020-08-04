const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, "Please add an artist"],
  },
  song: {
    type: String,
    required: [true, "Please add a song"],
  },
});

module.exports = mongoose.models.post || mongoose.model("post", PostSchema);
