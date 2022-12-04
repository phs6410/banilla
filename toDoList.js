const listForm = document.querySelector("#listForm");
const toDoInput = document.querySelector("#listForm input");
const toDo = document.querySelector("#toDo");
let doList = [];

function savedToDo() {
    localStorage.setItem("List", JSON.stringify(doList));
}

function handle3(e) {
    const li = e.target.parentElement;
    li.remove();
    doList = doList.filter((delId) => delId.id !== parseInt(li.id));
    savedToDo();
}

function handle2(wrToDo) {
    const li = document.createElement("li");
    li.id = wrToDo.id;
    const span = document.createElement("span");
    span.innerText = wrToDo.text;
    const button = document.createElement("button");
    button.innerText = "Finish!";
    button.addEventListener("click", handle3);
    li.appendChild(span);
    li.appendChild(button);
    toDo.appendChild(li);
}

function handle1(e) {
    e.preventDefault();
    const wrToDo = toDoInput.value;
    toDoInput.value = "";
    const wrToDoOj = {
        text:wrToDo,
        id: Date.now()
    };
    doList.push(wrToDoOj);
    handle2(wrToDoOj);
    savedToDo();
}

listForm.addEventListener("submit", handle1);

const hadToDo = localStorage.getItem("List");

if (hadToDo !== null) {
    const transToDo = JSON.parse(hadToDo);
    doList = transToDo;
    transToDo.forEach(handle2);
}