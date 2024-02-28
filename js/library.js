class Library{
  constructor(){
    this.books = new Array();
  }

  addBook(book){
    this.books.push(book);
  }

  removeBook(id){
    this.books = this.books.filter(book => book.id !== id);
  }

  updateBook(id, title, author, genre, status){
    let book = this.books.find(book => book.getId === id);
    book.setTitle = title;
    book.setAuthor = author;
    book.setGenre = genre;
    book.setStatus = status;
  }
}