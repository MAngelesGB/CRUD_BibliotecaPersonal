function hideSection(id){
    //Devuelve una NodeList con todos los elementos section.
    document.querySelectorAll('section').forEach(function(section){
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}