var startBTN=document.querySelector("#calc");

startBTN.addEventListener("click", changeScene);

function changeScene(){
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

var calcBTN = document.querySelector("#dday-calc");
var resetBTN = document.querySelector("#dday-reset");

calcBTN.addEventListener("click", ddayCalc);

function ddayCalc(e){
    e.preventDefault(); //화면새로고침방지
    var userYear = document.querySelector("#userYear").Value;
    var userMonth = document.querySelector("#userMonth").Value;
    var userDate = document.querySelector("#userDate").Value;

    //디데이 계산 출력하기

}