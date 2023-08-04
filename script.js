const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-todo");
const listContainer2 = document.getElementById("list-done");

function addTask(){
    if(inputBox.value === ''){
        alert("Add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        }
    }, false);




//attempting to move data from top list to completed list
listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox" && event.target.checked) {
      const listItem = event.target.parentNode;
      listContainer2.appendChild(listItem);
      event.target.checked = false;
      saveData();
    }
  });
  



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});