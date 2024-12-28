document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const login = document.getElementById('login').value;
    const dob = new Date(document.getElementById('dob').value);
    const currentYear = new Date().getFullYear();
    
    // Проверка даты рождения
    if (dob.getFullYear() < 1950 || dob.getFullYear() > currentYear) {
        document.getElementById('dobError').innerText = 'Дата рождения должна быть между 1950 и текущим годом.';
        return;
    }

    // Успешная авторизация
    document.getElementById('username').innerText = `Добро пожаловать, ${login}`
    // Сохранение имени пользователя в localStorage
    localStorage.setItem('username', login);
    localStorage.setItem('age', dob)
    localStorage.setItem('gender', document.getElementById('gender').value);
    //document.getElementById('userNameDisplay').innerText = login;

    // Показать кнопку выхода
    document.getElementById('logout').style.display = 'block';

    // Скрыть форму авторизации
    document.getElementById('authForm').style.display = 'none';
    window.location.href = 'description.html';
    // Сбросить ошибки
    document.getElementById('dobError').innerText = '';
    document.getElementById('loginError').innerText = '';
    document.getElementById('genderError').innerText = '';
});
// Обработчик для кнопки выхода
document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('username').innerText = '';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
});


// Обработчик для кнопки выхода
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('lastScore');
    document.getElementById('username').innerText = '';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
});

// Восстановление имени пользователя при загрузке страницы
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = `Добро пожаловать, ${username}`;
        document.getElementById('logout').style.display = 'block';
    }
};

