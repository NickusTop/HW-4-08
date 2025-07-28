const inputName = document.querySelector('.input-name');
const inputPassword = document.querySelector('.input-password');
const button = document.querySelector('.button-i');

button.addEventListener('click', buttonClick);

function buttonClick() {
    const name = inputName.value;
    const password = inputPassword.value;
    if (name === '' || password === '') {
        alert('Будь ласка заповніть всі поля!');
        return;
    } else if (name.length < 3 || password.length < 3) {
        alert('Ім\'я та пароль повинні містити не менше 3 символів!');
        return;
    } else if (name.length > 20 || password.length > 20) {
        alert('Ім\'я та пароль повинні містити не більше 20 символів!');
        return;
    } else {
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        inputName.value = '';
        inputPassword.value = '';
    }
}   
function renderInputs() {
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    if (name) {
        inputName.value = name;
    }
    if (password) {
        inputPassword.value = password;
    }
}
renderInputs();