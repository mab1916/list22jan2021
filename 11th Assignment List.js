
function Add() {
// List
    //getting the value from input
    var todoId = document.getElementById("todoId").value;
    var todoTitle = document.getElementById('todoTitle').value;
    var todoDecs = document.getElementById('todoDesc').value;
    var todoDate = document.getElementById('todoDate').value;
    
    //creating li element
    var listId = document.createElement("li");
    var listTitle = document.createElement("li");
    var listDesc = document.createElement("li");
    var listDate = document.createElement("li");
    
    //giving input value to a variable
    var inputId = document.createTextNode(todoId);
    var inputTitle = document.createTextNode(todoTitle);
    var inputDesc = document.createTextNode(todoDecs);
    var inputDate = document.createTextNode(todoDate);
    
    //connecting that variable with li element with appendChild
    listId.appendChild(inputId);
    listTitle.appendChild(inputTitle);
    listDesc.appendChild(inputDesc);
    listDate.appendChild(inputDate);
    
    //getting the div id (where to show or create the li element)
    var listIdView = document.getElementById('todoViewId');
    var listTitleView = document.getElementById('todoViewTitle');
    var listDescView = document.getElementById('todoViewDecs');
    var listDateView = document.getElementById('todoViewDate');

    //giving the value to div with appendChild
    listIdView.appendChild(listId);
    listTitleView.appendChild(listTitle);
    listDescView.appendChild(listDesc);
    listDateView.appendChild(listDate);
    
// Delete button
    //creating a delete button with the li element to delete it
    //ID
    var idDel = document.createElement("input");
    idDel.type = "submit";
    idDel.value = "X";
    var idDelButton = document.getElementById("idDelete");
    idDelButton.appendChild(idDel);
    //Title
    var titleDel = document.createElement("input");
    titleDel.type = "submit";
    titleDel.value = "X";
    var titleDelButton = document.getElementById("titleDelete");
    titleDelButton.appendChild(titleDel);
    //Description
    var descDel = document.createElement("input");
    descDel.type = "submit";
    descDel.value = "X";
    var descDelButton = document.getElementById("DescDelete");
    descDelButton.appendChild(descDel);
    //Date
    var dateDel = document.createElement("input");
    dateDel.type = "submit";
    dateDel.value = "X";
    var dateDelButton = document.getElementById("dateDelete");
    dateDelButton.appendChild(dateDel);
    
}
// Delete ID
function IdDelete() {
    var listIdView = document.getElementById('todoViewId');
    var idDelButton = document.getElementById("idDelete");
    idDelButton.remove(listIdView);
}
// Delete Title
function TitleDelete() {
    var listTitleView = document.getElementById('todoViewTitle');
    var titleDelButton = document.getElementById("titleDelete");
    titleDelButton.remove(listTitleView);
}
// Delete Description
function DescDelete() {
    var listDescView = document.getElementById("todoViewDecs");
    var descDelButton = document.getElementById("DescDelete");
    descDelButton.remove(listDescView);
}
// Delete Date
function DateDelete() {
    var listDateView = document.getElementById("todoViewDate");
    var dateDelButton = document.getElementById("dateDelete");
    dateDelButton.remove(listDateView);
}

    
