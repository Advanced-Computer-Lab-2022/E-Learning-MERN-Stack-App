const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const signUpBtn = document.getElementById('signUpBtn');
const container = document.querySelector(".container");
const loginBtn = document.getElementById('loginBtn')
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    document.title = "Sign Up"
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    document.title = "Sign In"
});
signUpBtn.addEventListener("click", () => {
    const params = {
        firstName: document.getElementById('firstNameInput').value,
        lastName: document.getElementById('lastNameInput').value,
        gender: document.getElementById('genderInput').value,
        email: document.getElementById('emailInput').value,
        password: document.getElementById('passwordInput').value,
    }
    console.log(params)
});
loginBtn.addEventListener("click", () => {
    const params = {
        username: document.getElementById('userLoginInput').value,
        password: document.getElementById('passwordLoginInput').value,
    }
    console.log(params)
});
