const myLibrary = [
{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    readStatus: "Read"
}];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    // Get user input
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = getReadStatus();

    // Create new Book with user input
    let newBook = new Book(title, author, pages, readStatus);
    // Add user input into myLibrary as new object
    myLibrary.push(newBook);
    displayNewBook();
    clearForm();
}

function getReadStatus() {
    var selectedRadio = document.querySelector('input[name="readStatus"]:checked');

    // Check if a radio button is selected
    if (selectedRadio) {
        return selectedRadio.value;
    } else {
        console.log("No radio button selected");
    }
}

function displayNewBook() {
    // Get details of the last Object in myLibrary (new book)
    let book = myLibrary[myLibrary.length - 1];
    console.log(book);

    // Create and populate the new book element
    const divBook = document.createElement('div');
    divBook.classList.add('book');
    divBook.innerHTML = `
        <div class="book-header">
            <h3>${book.title}</h3>
            <h4>${book.readStatus}</h4>
        </div>
        <p><strong>Author:</strong> ${book.author}</p>
            <div class="book-bottom">
                <p><strong>Page count:</strong> ${book.pages}</p>
                <button class="btnRemove" onclick="removeBook(event);">Remove</button>
            </div>
    `;

    // Add book to book-container
    let bookContainer = document.querySelector('.book-container')
    bookContainer.insertBefore(divBook, bookContainer.firstChild);
}

function clearForm() {
    let form = document.getElementById("newBookForm");
    form.reset();
}

function removeBook(event) {
    let el = event.target;
    // Get the book div the clicked remove button is associated with
    let bookDiv = el.parentNode.parentNode;
    if (bookDiv) {
        bookDiv.remove();
    }
}

const dialog = document.querySelector("dialog");
const btnNewBook = document.querySelector("#btnNewBook");
const btnClose = document.querySelector("dialog button");

// Show the dialog button open the dialog modally
btnNewBook.addEventListener("click", () => {
    dialog.showModal();
});

// Close button closes the dialog
btnClose.addEventListener("click", () => {
    dialog.close();
});
