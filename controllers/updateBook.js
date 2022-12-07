import Books from "../models/Books";
import { validateUpdates } from "../utils/validateUpdates";
export const updateBook = async (req, res) => {
  const BOOK_ID = req.params.id;
  try {
    const isValidTripsUpdates = validateUpdates(req, [
      "title",
      "author",
      "genre",
      "pages",
      "year_published",
    ]);

    const book = await Books.findById(BOOK_ID);
    const duplicate = await Books.find({
      _id: { $ne: BOOK_ID },
      title: req.body.title,
      author: req.body.author,
    });

    if (duplicate.length != 0) {
      return res.send({
        success: false,
        message: "Book already exists",
      });
    }
    if (book == null) {
      return res.send({
        success: false,
        message: "Cannot find Book. Try checking id again",
      });
    }
    isValidTripsUpdates.updates.forEach((update) => {
      book[update] = req.body[update];
    });
    await book.save();
    return res.send({
      success: true,
      message: "Book has been updated",
    });
  } catch (e) {
    return res.send({
      success: false,
      error: e.message,
    });
  }
};
