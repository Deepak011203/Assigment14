const Book = require("../modal/BookModal");

//POST Api - Create
const createBook = async (req, res) => {
    const { bookTitle, bookAuthor, bookDescription, bookPrice, bookReview, bookPage, } = req.body;
    try {
        if (!bookTitle || !bookAuthor || !bookDescription || !bookPrice || !bookPage) {
            return res.status(400).json({ message: "Please fill up the required fields" });
        }

        const newBook = new Book({ bookTitle, bookDescription, bookAuthor, bookPrice, bookPage, bookReview });
        await newBook.save();
        res.status(201).json({ message: "Book added", newBook });

    } catch (err) {
        res.status(500).json({ message: "Book Creation failed" });

    }

}
//GET API - Read
const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);

    } catch (err) {
        res.status(500).json(({ message: "Book fetching failed" }));

    }
}
//GET BY ID API - Read a sepefic record

const getBookbyId = async(req, res) => {
    try {
        const { id } = req.params;
        const book =await Book.findById(id);

        if(!book){
            return res.status(404).json ({message:"product not found"})
        }
        res.status(200).json(book);



    } catch(err){
    res.status(500).json({message:"Book fetching failed"});

    }
}
// EDIT API - UPDATE 
const updateBook = async (req,res)=> {
    try{
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id,req.body, {new: true});
        res.status(200).json({message: "Book updated", updatedBook});

    } catch(err){
        res.status(500).json({message:"Book updation failed"});

    }
}
//DELETE API 
const deleteBook = async(req,res) =>{
    try{
        const {id} = req.params;
        await Book.findByIdAndDelete(id);
        
        res.status(200).json({message:"book deleted"});

    }catch(err){
        res.status(500).json({message:"Book deletion failed"});
    }
}

module.exports ={createBook,getBook,getBookbyId,updateBook,deleteBook};