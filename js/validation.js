const validationText = new RegExp('^[A-Z ]+$', 'i');

function validation(book){
  if(book.getTitle === "" || book.getAuthor === "" ) {
      return false;
  } else {
      if(!validationText.test(book.getTitle) || !validationText.test(book.getAuthor)){
        return false;
      }else{
        return true;
      }
  }
}

function validationUpdate(title, author){
  if(title === "" || author === "" ) {
      return false;
  } else {
      if(!validationText.test(title) || !validationText.test(author)){
        return false;
      }else{
        return true;
      }
  }
}

