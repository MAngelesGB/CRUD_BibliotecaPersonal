class Books{
  constructor(name, autor, genre, year, editorial, status){
    this.name = name;
    this.autor = autor;
    this.genre = genre;
    this.year = year;
    this.editorial = editorial;
    this._status = "to read"; 
  }

  get getName(){
    return this.name; 
  }
  set setName(name){
    this.name = name
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

  get getYear()
  {
    return this.year; 
  }
  set setYear(year){
    this.year = year;
  }

  get getEditorial(){
    return this.editorial; 
  }
  set setEditorial(editorial){  
    this.editorial = editorial;
  }

  get getStatus(){
    return this.status; 
  }
  set setStatus(status){
  }

}