// book class - represens a book

class book {
    constructor(Title,Author,SerialNo) {
        this.Title = Title;
        this.Author = Author;
        this.SerialNo = SerialNo;
    }
}

// UI class = handle ui tasks

class UI {
    static displayBooks(){
        const storedBooks = [
            {
                title: 'Book One',
                author: 'Amit Singh',
                serialNo: '33MH9J'
            },
            {
                title: 'Book Two',
                author: 'Jai Singh',
                serialNo: '38BH9J'
            }
        ];
        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.serialNo}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// store class : handles storage

// event : display book

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event : add a book

document.querySelector('#book-form').addEventListener('submit', (e)=> {

    // Prevent actual Submit
    e.preventDefault();


    //Get Form Value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const serialNo = document.querySelector('#serialNo').value;

    // instatiate book
    const book = new book(title,author,serialNo);

    console.log(book)

});

// event : remove a book

