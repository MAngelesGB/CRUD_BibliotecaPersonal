class Library{
  constructor(){
    this.books = new Array();
    this.read = this.books.filter(book => book.status === "read");
    this.toRead = this.books.filter(book => book.status === "to read");
    this.reading = this.books.filter(book => book.status === "reading");
    this.abandoned = this.books.filter(book => book.status === "abandoned");
  }

  addBook(book){
    this.books.push(book);
  }

  searchBook(title){

  }

  removeBook(id){

  }

  updateBook(id, book){

  }
}