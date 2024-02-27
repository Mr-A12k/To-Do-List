const inputBox=document.getElementById("search-input");
const listSec=document.getElementById("list-sec");
 
function addItem(){
    if(inputBox.value === '')
    {
        alert("Add some task!");
    }

    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listSec.appendChild(li);
        
    }
 }