const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('usrname');
const passwordInput = document.getElementById('psw');
const rememberInput = document.getElementById('remember');
const errorMsg = document.getElementById('loginError');

if (!form || !usernameInput || !passwordInput || !rememberInput || !errorMsg) {
    console.error('Login form elements not found in the DOM');
}
 
const VALID_USERNAME = 'username';
const VALID_PASSWORD = 'password123';
 
const savedUsername = localStorage.getItem('ParkPatrolUsername');
if (savedUsername) {
    usernameInput.value = savedUsername;
}
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorMsg.textContent = '';
 
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
 
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        if (rememberInput.checked) {
            localStorage.setItem('ParkPatrolUsername', username);
        } else {
            localStorage.removeItem('ParkPatrolUsername');
        }
        localStorage.setItem('ParkPatrolLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        errorMsg.textContent = 'Incorrect username or password. Try username / password123.';
    }
});