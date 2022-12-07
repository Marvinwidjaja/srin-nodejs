import Books from "../models/Books";

export const getBooks = async (req, res) => {
  const book = await Books.find({});
  res.json(book);
};
