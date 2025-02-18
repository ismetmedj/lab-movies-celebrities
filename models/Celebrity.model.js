//  Add your code here
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Celebrity model to whatever makes sense in this case
const celebrity = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    occupation: {
      type: String,
      trim: true,
    },
    catchPhrase: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Celebrity = model("Shop", celebrity);

module.exports = Celebrity;
