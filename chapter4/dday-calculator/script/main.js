var startBTN=document.querySelector("#calc");

startBTN.addEventListener("click", changeScene);

function changeScene(e){
    // console.log(e);
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

var ddayFORM = document.querySelector("#ddayForm");

var calcBTN = document.querySelector("#ddayCalc");

var resetBTN = ddayFORM.querySelector("#ddayReset");

ddayFORM.addEventListener("submit", ddayCalc);

function ddayCalc(e){
    e.preventDefault(); //화면새로고침방지
    
    var userYEAR = document.querySelector("#userYear").value;
    var userMONTH = document.querySelector("#userMonth").value;
    var userDATE = document.querySelector("#userDate").value;

    //디데이 계산 출력하기
    var today = new Date();
    
    var theDate = new Date(userYEAR, userMONTH-1, userDATE);

    var diffDate = theDate.getTime() - today.getTime();

    var result = Math.ceil(diffDate / (1000*60*60*24));

    // alert("D-day :"+result); -팝업창으로 만들자
    var ddayPOP = document.querySelector("#result_pop");
    var ddayTEXT = ddayPOP.querySelector("#d_day");
    ddayTEXT.innerHTML = `<strong>${result}</strong> 일`;
    //팝업.클래스목록.제거("d-none");
    ddayPOP.classList.remove("d-none");
}