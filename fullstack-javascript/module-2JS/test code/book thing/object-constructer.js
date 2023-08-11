"use strict";
let myLibrary = new Array();
function Book(bookName, author, pageCount, read) {
    this.bookName = bookName;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}
Book.prototype.getInfo = function () {
    return `${this.bookName} by ${this.author}, ${this.pageCount} pages, Read: ${this.read}`;
};
let harryPotter = new Book("Harry Potter", "JK. Rowling", 567, true);
console.log(harryPotter.getInfo());
