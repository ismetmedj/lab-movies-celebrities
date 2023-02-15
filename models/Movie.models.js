//  Add your code here
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Movie model to whatever makes sense in this case
const movie = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    plot: {
      type: String,
    },
    cast: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
    },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movie = model("ShopMovie", movie);

module.exports = Movie;
