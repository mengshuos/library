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

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".window-close");
const confirmAddBtn = document.querySelector(".cfm-add-btn");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");

// when plus sign clicked, open the dialog
addBookBtn.addEventListener("click", ()  => {
    dialog.showModal(dialog);
});

confirmAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, false);
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value  = "";
    dialog.close();
});


// when close button pressed, close the dialog
closeBtn.addEventListener("click", () => {
    dialog.close();
});

const addBookCard = document.querySelector(".add");
const container = document.querySelector(".container");

// adds the newest book to the array
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages, false);
    createBook(book);
    myLibrary.push(book);
}

// creates book card
function createBook(book) {
    const newCard = document.createElement("div");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const deleteBtn = document.createElement("img");

    newCard.dataset.index = myLibrary.length;
    deleteBtn.src = "delete.svg";
    newTitle.innerHTML = book.title;
    newAuthor.innerHTML = book.author;
    newPages.innerHTML = book.pages;

    deleteBtn.classList.toggle("delete-icon");
    newCard.classList.toggle("card");
    newTitle.classList.toggle("card-title");
    newAuthor.classList.toggle("card-author");
    newPages.classList.toggle("class-pages");

    // remove button code
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
        myLibrary.splice(newCard.dataset.index, 1, "");
    })

    newCard.appendChild(deleteBtn);
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    container.insertBefore(newCard, addBookCard.nextSibling);
};