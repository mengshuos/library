const myLibrary = [new Book("The Lightning Thief", "Rick Riordan", "374", true), new Book("Dune", "Frank Herbert", "658", false),
                new Book("The Hunger Games", "Suzanne Collins", "374", true), new Book("The Three-Body Problem", "Liu Cixin", "472", false),
                new Book("The Song of Achilles", "Madeline Miller", "408", false), new Book("A Good Girl's Guide to Murder", "Holly Jackson",  "400", true)];

// constructor for making the books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "read already" : "not read yet"}`;
};

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".window-close");
const confirmAddBtn = document.querySelector(".cfm-add-btn");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

// when plus sign clicked, open the dialog
addBookBtn.addEventListener("click", ()  => {
    dialog.showModal(dialog);
});

confirmAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value  = "";
    inputRead.checked = false;
    dialog.close();
});


// when close button pressed, close the dialog
closeBtn.addEventListener("click", () => {
    dialog.close();
});

const addBookCard = document.querySelector(".add");
const container = document.querySelector(".container");

// adds the newest book to the array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    createBook(book);
    myLibrary.push(book);
};

// creates book card
function createBook(book) {
    const newCard = document.createElement("div");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const deleteBtn = document.createElement("img");
    const readBtn = document.createElement("button");
    
    newCard.dataset.index = myLibrary.map((i) => i.title).indexOf(book.title);
    if (newCard.dataset.index == -1) newCard.dataset.index = myLibrary.length;
    deleteBtn.src = "delete.svg";
    newTitle.innerHTML = book.title;
    newAuthor.innerHTML = book.author;
    newPages.innerHTML = book.pages;
    readBtn.innerHTML = book.read ? "Read" : "Not Read";

    deleteBtn.classList.toggle("delete-icon");
    newCard.classList.toggle("card");
    newTitle.classList.toggle("card-title");
    newAuthor.classList.toggle("card-author");
    newPages.classList.toggle("class-pages");
    readBtn.classList.toggle("not-read");
    if (readBtn) readBtn.classList.toggle("read");

    // remove button code
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
        console.log(newCard.dataset.index);
        myLibrary.splice(newCard.dataset.index, 1, "");
    });

    // change read status of book
    readBtn.addEventListener("click", () => {
        book.read = book.read ? false : true;
        readBtn.innerHTML = book.read ? "Read" : "Not Read";
        readBtn.classList.toggle("read");
    })

    newCard.appendChild(deleteBtn);
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(readBtn);
    container.insertBefore(newCard, addBookCard.nextSibling);
};

document.addEventListener("DOMContentLoaded", () => {
    for (book of myLibrary) {
        createBook(book);
    };
});