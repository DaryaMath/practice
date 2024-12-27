
const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = `Добро пожаловать, ${username}`;
        document.getElementById('logout').style.display = 'block';
    } else {
       document.getElementById('main').style.display = 'none' 
    }
    document.getElementById('logout').addEventListener('click', function() {
        document.getElementById('username').innerText = '';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('authForm').style.display = 'block';
    });
