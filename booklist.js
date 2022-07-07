// book class - represens a book

class Book {
    constructor(title,author,serialNo) {
        this.title = title;
        this.author = author;
        this.serialNo = serialNo;
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

        books.forEach((Book) => UI.addBookToList(Book));
    }
    static addBookToList(_Book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${Book.title}</td>
        <td>${Book.author}</td>
        <td>${Book.serialNo}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }

    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#serialNo').value = '';
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
    const book = new Book(title,author,serialNo);

    // add book to UI
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();

});

// event : remove a book

document.querySelector('#booklist').addEventListener('click', (e) =>
 {
    UI.deleteBook(e.target)
});


// almost done few function pending.....
