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
const addBooktoLibrary = () => {
    if (document) {
        const author = document.getElementById("author").value;
        const book = document.getElementById("book-name").value;
        let pageCount = document.getElementById("page-count").value;
        pageCount = parseInt(pageCount);
        let read = document.getElementById("read").selectedIndex; //this is fine
        if (read == 0) {
            read = true;
        }
        else {
            console.log(read);
            read = false;
        }
        if (author && book) {
            const bookObject = new Book(book, author, pageCount, read);
            myLibrary.push(bookObject);
            return;
        }
        else {
            const error = new Error("Forms were not all filled out");
            console.log(error);
            return error;
        }
    }
};
const modal = document.getElementById("modal");
const backgroundBlur = document.querySelector(".background-blur");
const newBookButton = document.querySelector(".new-book");
const toggleModal = () => {
    if (modal.style.display === "none") {
        modal.style.display = "flex";
        backgroundBlur.style.display = "block";
        newBookButton.style.display = "none";
    }
    else {
        modal.style.display = "none";
        backgroundBlur.style.display = "none";
        newBookButton.style.display = "flex";
    }
};
const content = document.querySelector(".content");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBooktoLibrary();
    document.getElementById("card-grid").innerHTML = "";
    const author = document.getElementById("author").value = "";
    const book = document.getElementById("book-name").value = "";
    let pageCount = document.getElementById("page-count").value = "";
    myLibrary.forEach(book => {
        const div = document.createElement("div");
        div.style.position = "relative";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.flexWrap = "wrap";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (book.read) {
            checkbox.checked = true;
        }
        checkbox.addEventListener("click", () => {
            if (book.read) {
                book.read = false;
            }
            else {
                book.read = true;
            }
        });
        checkbox.classList.add("check");
        const h2 = document.createElement("h2");
        h2.innerText = book.bookName;
        const authorP = document.createElement("p");
        authorP.innerText = `By: ${book.author}`;
        const pageP = document.createElement("p");
        pageP.style.width = "100%";
        authorP.style.width = "100%";
        pageP.innerText = `Pages: ${book.pageCount}`;
        const deleteButton = document.createElement("ion-icon");
        deleteButton.classList.add("delete");
        deleteButton.name = "trash-outline"; //its ok
        console.log(myLibrary.length - 1);
        deleteButton.addEventListener("click", () => {
            const index = myLibrary.length - 1;
            div.remove();
            myLibrary.splice(index, 1);
        });
        div.appendChild(checkbox);
        div.appendChild(h2);
        div.appendChild(authorP);
        div.appendChild(pageP);
        div.appendChild(deleteButton);
        document.getElementById("card-grid").appendChild(div);
    });
    toggleModal();
    content.style.maxHeight = content.scrollHeight + "px";
});
const toggleCollapse = () => {
    if (content.style.maxHeight) {
        document.querySelector(".caret").name = "caret-down-outline";
        content.style.maxHeight = null;
        content.style.padding = "0";
    }
    else {
        document.querySelector(".caret").name = "caret-up-outline";
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "20px";
    }
};
backgroundBlur.addEventListener("click", toggleModal);
newBookButton.addEventListener("click", toggleModal);
toggleModal();
