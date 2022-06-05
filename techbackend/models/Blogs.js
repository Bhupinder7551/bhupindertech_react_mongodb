const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String }, // String is shorthand for {type: String}
  author: { type: String}, 
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
  body: { type: String },
  comments: [{ body: String, date: Date }],
  date: {
    type: Date,
    default: Date.now,
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
module.exports = mongoose.model('Blogs', blogSchema);