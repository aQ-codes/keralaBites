let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault;
    //do nothing if formnot validated
    if(!validateForm(form)) return;
});

const validateForm = (form) => {
    let valid = true;
    //check for empty fields
    let name = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email")

    if (name.value === ""){
        giveError(name, "Please enter your name");

    }
}

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    

}