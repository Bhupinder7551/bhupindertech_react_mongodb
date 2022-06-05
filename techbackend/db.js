const mongoose = require('mongoose');


const DB = () => {
  mongoose.connect("mongodb://localhost:27017", () => {
    console.log("database connected successfully");
  });
}
module.exports= DB;