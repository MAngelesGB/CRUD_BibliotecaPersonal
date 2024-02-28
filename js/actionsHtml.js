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

//function to color active sections
function colorActiveSection(id){
    document.querySelectorAll('li').forEach(function(link){
        link.style.backgroundColor = 'transparent';
    });
    document.getElementById(id).style.backgroundColor = '#FFC4DA';
}

//function to show Add action Form
function showAddActionForm(id){
    document.getElementById(id).style.display = 'flex';
    document.getElementById('add-action-button').style.display = 'none';
}

//function clear inputs
function clearInputs(){
    //Selet all inputs and clear them with a forEach loop using querySelectorAll that returns a NodeList.
    document.querySelectorAll('input').forEach(function(input){
        input.value = '';
    });
    document.getElementById('select-option-genre').selectedIndex = 0;
    document.getElementById('select-option-status').selectedIndex = 0;
}

//function to show add button
function showAddButton(id){
    document.getElementById(id).style.display = 'none';
    document.getElementById('add-action-button').style.display = 'flex';
}