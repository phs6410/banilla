const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const loginAfter = document.querySelector("#afterLogin");
const hidClass = "hidden";
const username = "id";

function input(e) {
    e.preventDefault();
    loginForm.classList.add(hidClass);
    const id = loginInput.value;
    localStorage.setItem(username, id);
    setLogin(id);
}

function setLogin(id) {
    loginAfter.innerText = `Welcome! ${id}`;
    loginAfter.classList.remove(hidClass);
}

const savedId = localStorage.getItem(username);

if (savedId === null) {
    loginForm.classList.remove(hidClass);
    loginForm.addEventListener("submit", input);
} else {
    setLogin(savedId);
}


