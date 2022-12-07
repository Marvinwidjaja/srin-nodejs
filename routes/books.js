import express from "express";
import Books from "../models/Books";
import { addBook } from "../controllers/addBook";
import { deleteBook } from "../controllers/deleteBook";
import { updateBook } from "../controllers/updateBook";
import { findByGenre } from "../controllers/findByGenre";
import { getBooks } from "../controllers/getBooks";
const router = express.Router();

router.get("/", getBooks);

router.get("/findGenre/:genre", findByGenre);
router.put("/editBook/:id", updateBook);

router.delete("/deleteBook/:id", deleteBook);

router.post("/addBook", addBook);

export default router;
