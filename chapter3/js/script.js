var loginForm = document.querySelector("#login-form")
var loginBTN = loginForm.querySelector("#go_login");
var u_id = document.querySelector("#user_id");
var u_pw = document.querySelector("#user_pw");

var admin_id = "super7777", admin_pw = "super7777!"

loginForm.addEventListener("submit", submitFunc);

function submitFunc(e) {
    e.preventDefault();
    console.log(u_id.value, u_pw.value);

    if(admin_id===u_id.value) {
        if(admin_pw===u_pw) {
            alert("관리자 로그인 성공~ 이동한당");
        } else {
            alert("로그인 실패. 다시하세여");
            location.reload();
        }
    } else {
        alert("실패~ 다시하세요");
        location.reload();
    }
}