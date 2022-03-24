var startBTN=document.querySelector("#calc");

startBTN.addEventListener("click", changeScene);

function changeScene(e){
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

var ddayFORM = document.querySelector("#ddayForm");

var resetBTN = ddayFORM.querySelector("#dday_reset");

ddayFORM.addEventListener("submit", ddayCalc);

function ddayCalc(){
    e.preventDefault(); //화면새로고침방지
    var userYear = document.querySelector("#userYear").Value;
    var userMonth = document.querySelector("#userMonth").Value;
    var userDate = document.querySelector("#userDate").Value;

    //디데이 계산 출력하기
    var today = new Date();
    var nowMonth = today.getMonth();
    var theDate = new Date(userYear,userMonth-1,userDate);

    var diffDate = theDate.getTime() - today.getTime();

    var result = Math.ceil(diffDate / (1000*60*60*24));

    alert("D-day :"+result);
}