
const contBtn = document.querySelector('.button-link');
const inputUser= document.querySelector('.login-name');
const inputEmail= document.querySelector('.login-email');
const inputPassword= document.querySelector('.login-password');
const inputRePassword = document.querySelector('.login-re-password')
contBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log ("correcto");
    console.log( inputUser.value);
    console.log(inputEmail.value);
    console.log(inputPassword.value);
    console.log(inputRePassword.value);

});
