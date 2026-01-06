let currentRole = '';

function login(role) {
    currentRole = role;
    document.querySelector('.cards').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Вход как ' + 
        (role === 'student' ? 'Ученик' : 
         role === 'chef' ? 'Повар' : 'Админ');
}

function backToRoles() {
    document.querySelector('.cards').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Заполните все поля');
        return;
    }
    
    // Простая проверка
    if (username === 'test' && password === '123') {
        alert('Успешный вход! Роль: ' + currentRole);
        // Здесь переход на другую страницу
        // window.location.href = '/' + currentRole + '.html';
    } else {
        alert('Неверные данные');
    }
}
