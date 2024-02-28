class Books{
  static id = 0; 
  constructor(title, author, genre,status){
    this.id = ++Books.id; 
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status; 
  }

  get getId(){
    return this.id; 
  }

  get getTitle(){
    return this.title; 
  }
  set setTitle(title){
    this.title = title; 
  }

  get getAuthor(){
    return this.author; 
  }
  set setAuthor(author){  
    this.author = author;
  }
  
  get getGenre(){
    return this.genre; 
  }
  set setGenre(genre){
    this.genre = genre;
  }

  get getStatus(){
    return this.status; 
  }
  set setStatus(status){
    this.status = status;
  }

}