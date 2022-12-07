import Books from "../models/Books";
export const deleteBook = async (req, res) => {
  const BOOK_ID = req.params.id;
  try {
    const book = await Books.findById(BOOK_ID);
    if (book == null) {
      return res.send({
        success: false,
        message: "Cannot find Book. Try checking id again",
      });
    }
    book.remove();
    return res.send({
      success: true,
      message: "Book deleted successfully.",
    });
  } catch (e) {
    return res.send({
      success: false,
      error: e.message,
    });
  }
};
