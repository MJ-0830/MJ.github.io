const toDoForm = document.querySelector("#do");
const toDoInput = document.querySelector("#do input");
const toDoList = document.querySelector("#dolist");

function deleteTD(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTD(newTD) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTD;
    button.innerText="✖";
    button.addEventListener("click",deleteTD)
    toDoList.appendChild(li);
}

function addTD(event) {
    event.preventDefault();
    const newTD = toDoInput.value;
    toDoInput.value="";
    paintTD(newTD);
}

toDoForm.addEventListener("submit",addTD);