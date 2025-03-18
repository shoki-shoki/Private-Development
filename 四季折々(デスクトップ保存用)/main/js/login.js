document.addEventListener("DOMContentLoaded", function() {
    let d = document;
    let usernameElement = d.getElementById('username');
    let username = localStorage.getItem('username');
    let passwordElement = d.getElementById('password');

    if (username) {
        usernameElement.value = username;
    }

    document.getElementById('loginButton').addEventListener('click', function() {
        login();
    });

    document.getElementById('showPassword').addEventListener('change', function() {
        if (this.checked) {
            passwordElement.type = 'text';
        } else {
            passwordElement.type = 'password';
        }
    });

    function login() {
        let usernameInput = usernameElement.value;
        let passwordInput = passwordElement.value;

        if (!usernameInput) {
            alert('ユーザー名を入力してください。');
            return;
        }

        if (passwordInput === "pass") {
            alert(`認証に成功しました。こんにちは、${usernameInput}さん`);
            localStorage.setItem('username', usernameInput);
            window.location.href = '../html/main.html';
        } else {
            alert('パスワードが正しくありません。');
        }
    }
});
