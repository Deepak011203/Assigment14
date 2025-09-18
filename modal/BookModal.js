const mongoose = require("mongoose");
//Schema creates a database key and value structure

const bookschema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookDescription:{
        type:String,
        required:true
    },
    bookPrice:{
        type:Number,
        required: true
    },
    bookPage:{
        type:Number,
        required:true
    },
    bookReview:{
        type:String,
    
    }
    
})
const Book = mongoose.model("Books", bookschema);

module.exports = Book;