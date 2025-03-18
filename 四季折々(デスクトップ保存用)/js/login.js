
// 入力情報の取得
document.addEventListener("DOMContentLoaded", function () {
    let d = document;
    let userid = d.getElementById("username");
    let pass = d.getElementById("password");



// IDとパスワードの事前登録
let userinfo = {
    "user1": "pass123",
    "user2": "pass456",
    "user3": "pass789"
};



 // ログインボタン押下後の処理
    document.getElementById("loginButton").addEventListener("click", function () {
        login();
    });

    function login() {
        let useridinput = userid.value;
        let passInput = pass.value;

        if (userinfo[useridinput] === passInput) {
            alert(`認証に成功しました。こんにちは、${useridinput}さん`);
            window.location.href = "index.html";
        } else {
            alert("IDまたはパスワードが正しくありません。");
        }
    }
});

