const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('usrname');
const passwordInput = document.getElementById('psw');
const rememberInput = document.getElementById('remember');
const errorMsg = document.getElementById('loginError');
 
const VALID_USERNAME = 'ranger';
const VALID_PASSWORD = 'duck123';
 
const savedUsername = localStorage.getItem('wildlifeAppUsername');
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
            localStorage.setItem('wildlifeAppUsername', username);
        } else {
            localStorage.removeItem('wildlifeAppUsername');
        }
        localStorage.setItem('wildlifeAppLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        errorMsg.textContent = 'Incorrect username or password. Try ranger / duck123.';
    }
});