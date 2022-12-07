import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  pages: {
    type: Number,
    require: true,
  },
  year_published: {
    type: Number,
    require: true,
  },
});

const Books = mongoose.model("Books", BookSchema);

export default Books;
