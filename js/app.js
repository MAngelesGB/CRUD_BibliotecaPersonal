const tableBooks = document.getElementById("table-books-body"); 
const library = new Library();

const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click",()=>{
    let title = document.getElementById("txtTitle").value;
    let author = document.getElementById("txtAuthor").value;
    let genre = document.getElementById("select-option-genre").value;
    let status = document.getElementById("select-option-status").value;
    let book = new Books(title, author, genre, status);
    library.addBook(book);
    addBookTable(book);
    clearInputs();
});

function addBookTable(book){
    tableBooks.innerHTML +=
    `
        <tr>
            <td>${book.getId}</td>
            <td>${book.getTitle}</td>
            <td>${book.getAuthor}</td>
            <td>${book.getGenre}</td>
            <td>${book.getStatus}</td>
            <td><button class="btn btn-danger" onclick="deleteBook(${book.getId})">Delete</button></td>
            <td><button class="btn btn-warning" onclick="updateBook(${book.getId})">Update</button></td>
        </tr>
    `

}