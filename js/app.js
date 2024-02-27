//Function to hide sections of page
function hideSection(id){
    //Devuelve una NodeList con todos los elementos section.
    document.querySelectorAll('section').forEach(function(section){
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    document.getElementById('add-action').style.display = 'none';
    document.getElementById('add-action-button').style.display = 'flex';
}

//function to show Add action Form
function showAddActionForm(id){
    document.getElementById(id).style.display = 'flex';
    document.getElementById('add-action-button').style.display = 'none';
}

//function to show add button
function showAddButton(id){
    document.getElementById(id).style.display = 'none';
    document.getElementById('add-action-button').style.display = 'flex';
}