document.addEventListener("DOMContentLoaded", function() {
    let d = document;
    let usernameElement = d.getElementById('UserProfile');
    let username = localStorage.getItem('username');
    if (username) {
        usernameElement.textContent = `ユーザー名: ${username}`;
        d.getElementById('loginvar').style.display = 'none';
        d.getElementById('status').removeAttribute('hidden');
        d.getElementById('logout').classList.remove('hidden');
    }

    let logoutLink = d.getElementById('logout');
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('username');
        usernameElement.textContent = '';
        d.getElementById('loginvar').style.display = 'block';
        d.getElementById('status').setAttribute('hidden', true);
        d.getElementById('logout').classList.add('hidden');
    });
});
