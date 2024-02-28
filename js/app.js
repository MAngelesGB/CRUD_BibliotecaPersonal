const tableBooks = document.getElementById("table-books-body"); 
const listBooks = document.getElementById("table-books-body-all");
const library = new Library();

const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click",()=>{
    let title = document.getElementById("txtTitle").value;
    let author = document.getElementById("txtAuthor").value;
    let genre = document.getElementById("select-option-genre").value;
    let status = document.getElementById("select-option-status").value;
    let book = new Books(title, author, genre, status);
    if(validation(book) == true){
        library.addBook(book);
        addBookTable(book);
        clearInputs();
    }
    else
        alert("Empty fields or invalid characters. Please try again.");
        
});

const btnAllBooks = document.getElementById("active-books");
btnAllBooks.addEventListener("click",()=>{
    listBooks.innerHTML = "";
    library.books.forEach(book => {
        allBooks(book);
    });
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
            <td><button onclick="deleteBook(${book.getId})">Delete</button><button onclick="updateData(${book.getId})">Update</button></td>
        </tr>
    `
}

function allBooks(book){
    listBooks.innerHTML +=
    `
        <tr>
            <td>${book.getTitle}</td>
            <td>${book.getAuthor}</td>
            <td>${book.getGenre}</td>
            <td>${book.getStatus}</td>
        </tr>
    `
}

function deleteBook(id){
    let deleted = confirm("Do you want to delete this book?");
    if (deleted)
    {
        library.removeBook(id);
        tableBooks.innerHTML = "";
        library.books.forEach(book => {
            addBookTable(book);
        });
    }
    
}

function updateData(id){
    let book = library.books.find(book => book.getId === id);
    document.getElementById("txtId").value = book.getId;
    document.getElementById("txtTitle").value = book.getTitle;
    document.getElementById("txtAuthor").value = book.getAuthor;
    document.getElementById("select-option-genre").value = book.getGenre;
    document.getElementById("select-option-status").value = book.getStatus;
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnUpdate").style.display = "block";
}


function updateBook(){
    let modified = confirm("Do you want to update this book?");
    if (modified){
        let id = document.getElementById("txtId").value;
        let title = document.getElementById("txtTitle").value;
        let author = document.getElementById("txtAuthor").value;
        let genre = document.getElementById("select-option-genre").value;
        let status = document.getElementById("select-option-status").value;
        
        if(validationUpdate(title, author) == true)
        {
            library.updateBook(parseInt(id,10), title, author, genre, status);
            tableBooks.innerHTML = "";
            library.books.forEach(book => {
                addBookTable(book);
            });

            document.getElementById("btnSave").style.display = "block";
            document.getElementById("btnUpdate").style.display = "none";
            clearInputs();
        }
        else
            alert("Empty fields or invalid characters. Please try again.");
    
        
        
    }
    
}
