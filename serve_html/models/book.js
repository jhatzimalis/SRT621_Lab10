const mongoose = require("mongoose"),
    bookSchema = mongoose.Schema({
        bookName: String,
        authorName: String,
        purchaseLink: String,
    });
module.exports = mongoose.model("Book", bookSchema);