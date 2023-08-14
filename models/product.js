const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  _id:String,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  ratings: [Number],
  mediaCount: {
    type: Number,
    default: 0,
  },
  userId:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
);

module.exports = mongoose.model("Field", Schema);
