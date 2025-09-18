const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {createBook,getBook,getBookbyId,updateBook,deleteBook} = require("../controller/BookController");

router.post("/books", authMiddleware(["librarian"]), createBook);
router.get("/books", authMiddleware(["student","librarian"]),getBook);
router.get("/books/:id",authMiddleware(["librarian"]),getBookbyId);
router.put("/books/:id",authMiddleware(["librarian"]),updateBook);
router.delete("/books/:id", authMiddleware(["librarian"]),deleteBook);

module.exports = router;

