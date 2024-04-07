const userForm = document.querySelector("#user");
const userInput = document.querySelector("#user input");
const Hi =document.querySelector("#userHi");
const userKey = "username";
const userDB = localStorage.getItem(userKey);
const hidden = "hidden";

function form(event) {
    event.preventDefault();
    localStorage.setItem(userKey,userInput.value)
    userForm.classList.add(hidden);
    Hello(userInput.value);
};

function Hello(userName) {
    Hi.classList.remove(hidden);
    Hi.innerText=`Hello ${userName}!`;
}

if (userDB===null) {
    userForm.classList.remove(hidden);
    userForm.addEventListener("submit",form);
} else {
    Hello(userDB);
}

