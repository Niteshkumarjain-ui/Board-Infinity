const mongoose = require("mongoose");
const validator = require("validator");
const toduSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },
  creator: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have duration"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
const Todu = mongoose.model("Todu", toduSchema);
module.exports = Todu;
