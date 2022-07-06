// Book Class - Represents a Book
class Book{
    constructor(title, author,serialno) {
        this.title = title;
        this.author = author;
        this.serialno = serialno;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displaybook() {
        const StoreBooks = [
            {
                title: 'Book One',
                author: 'Jai Singh',
                serialno: '8827h23'
            }
        ];
        const books = StoreBooks;

        books.forEach((book) =>UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement(tr);

        row.innerHTML = 
        <td>${book.title}</td>;
        <td>${book.Author}</td>;
        <td>${book.serialno}</td>;
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>;
        
        list.appendChild(row);
    }
}

// Store Class: Handle Storage

// Event: Display Book
document.addEventListener('DOMContentLoaded',UI.displaybook)

// Event: Add a Book

// Event: Remove a Book