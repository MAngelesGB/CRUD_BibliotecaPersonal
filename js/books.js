class Books{
  constructor(title, autor, genre){
    this.title = title;
    this.autor = autor;
    this.genre = genre;
    this.status = "to read"; 
  }

  get getTitle(){
    return this.title; 
  }
  set setTitle(title){
    this.titgle = title; 
  }

  get getAutor(){
    return this.autor; 
  }
  set setAutor(autor){  
    this.autor = autor;
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