import Books from "../models/Books";
export const addBook = async (req, res) => {
  try {
    const book_object = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages,
      year_published: req.body.year_published,
    };
    const book = new Books(book_object);
    const duplicate = await Books.find({
      title: req.body.title,
      author: req.body.author,
    });
    if (duplicate != null) {
      return res.send({
        success: false,
        message: "Book already exists",
      });
    }
    if (!book) {
      return res.send({
        success: false,
        message: "Fail to add Book.",
      });
    }
    await book.save();
    return res.send({
      success: true,
      message: "Book added successfully.",
    });
  } catch (e) {
    return res.send({ success: false, error: e.message });
  }
};
