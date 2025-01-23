const usersDatabase = [];

const authContainer = document.getElementById('authContainer');
const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');
const authButton = document.getElementById('authButton');
const toggleForm = document.getElementById('toggleForm');

let isLogin = true;

toggleForm.addEventListener('click', () => {
    isLogin = !isLogin;

    if (isLogin) {
        formTitle.textContent = 'Login';
        authButton.textContent = 'Login';
        toggleForm.textContent = "Înregistrați-vă";
    } else {
        formTitle.textContent = 'Register';
        authButton.textContent = 'Register';
        toggleForm.textContent = "Dacă aveți cont: Logați-vă aici.";
    }
});

authForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        
    } else {
        
    }
});

   

