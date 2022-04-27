"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var book1 = new book_1.Book('The Design of EveryDay Things', 'Don Norman', false);
var book2 = new book_1.Book('The Most Human Human', 'Brian Christian', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = "".concat(book.title, " by ").concat(book.author, " ");
    if (book.alreadyRead) {
        console.log("You already read ".concat(bookInfo));
    }
    else {
        console.log("You still need to read ".concat(bookInfo));
    }
}
