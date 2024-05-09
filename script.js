const myLibrary = [];

// constructor for making the books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "read already" : "not read yet"}`;
}

// adds the newest book to the array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book");
const closeBtn = document.querySelector("dialog button");

// when plus sign clicked, open the dialog
addBookBtn.addEventListener("click", ()  => {
    dialog.showModal(dialog);
});

// when close button pressed, close the dialog
closeBtn.addEventListener("click", () => {
    dialog.close();
})

// creates the book in the array as well as create the html card
function createBookCard() {
    for (let i in myLibrary) {
        const container = document.querySelector(".container");
        const newCard = document.createElement("div");
        const newTitle = document.createElement("div");
        const newAuthor = document.createElement("div");
        const newPages = document.createElement("div");

        newTitle.innerHTML = i.title;
        newAuthor.innerHTML = i.author;
        newPages.innerHTML = i.pages;

        newCard.classList.toggle("card");
        newTitle.classList.toggle("card-title");
        newAuthor.classList.toggle("card-author");
        newPages.classList.toggle("class-pages");

        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        container.appendChild(newCard);
    }
}