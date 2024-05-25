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
    let newBook = new Book("Musashi", "Eiji Yoshikawa", 984, "Unread");
    // Add user input into myLibrary as new object
    myLibrary.push(newBook);
}

function displayBook() {
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
        <p><strong>Page count:</strong> ${book.pages}</p>
    `;

    // Add book to book-container
    document.querySelector('.book-container').appendChild(divBook);
}
