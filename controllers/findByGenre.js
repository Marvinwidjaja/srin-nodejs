import Books from "../models/Books";

export const findByGenre = async (req, res) => {
  const GENRE = capitalizeFirstLetter(req.params.genre);
  try {
    const book = await Books.find({ genre: GENRE });
    res.json(book);
    if (book == null) {
      res.send({ success: false, message: "Genre not found" });
    }
  } catch (e) {
    return res.send({ success: false, error: e.message });
  }
};
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
