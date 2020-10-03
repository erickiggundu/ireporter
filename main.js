const log_in_btn = document.querySelector("#log-in-btn");
const register_me_btn = document.querySelector("#register-me-btn");
const container = document.querySelector(".container");

register_me_btn.addEventListener('click', () => {
    container.classList.add("register-me-mode");   
});  

log_in_btn.addEventListener('click', () => {
    container.classList.remove("register-me-mode");   
});   