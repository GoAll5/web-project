const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('reg_button')

button.onclick = () => {
    event.preventDefault();
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    alert("Ваша почта: " + localStorage.getItem('email') + "\nВаш пароль: " + localStorage.getItem('password'))
}
