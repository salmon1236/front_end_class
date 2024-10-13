// DOM(Document Object Model) : 문서객체모델

var titTestSelect = document.getElementById("titTestId");
console.log(titTestSelect); // <h3 class="titleTest" id="titTestId">타이틀 테스트1</h3>

// 하나의 문서상에서 동일한 아이디를 작성했다면, js에서는 맨처음 작성된 하나만 인지한다.

// DOM을 통해서 접근한 스크립트 영역은 가장 강제 영향이 크다.

// [각 해당 영역의 노드]
// <h3 class="tit" title="tit">타이틀</h3>
// h3 : element node
// class : property node
// 타이틀 : text node

// #1. id 선택자

document.getElementById("id_txt").style.color = "red";
document.getElementById("id_txt").style.fontStyle = "italic";

var idTxt = document.getElementById("id_txt");
console.log(idTxt);
idTxt.style.backgroundColor = "#ff0";

// #2. 클래스 선택자
var classTrip = document.getElementsByClassName("trip");
console.log(classTrip);

classTrip[2].style.color = "green";
// 해당하는 클래스명으로 전제 스타일 적용시
// for (i in classTrip) {
//   classTrip[i].style.backgroundColor = "#f90";
// }

// #3. 태그 선택자
var h6Tag = document.getElementsByTagName("h6");
console.log(h6Tag);
h6Tag[1].style.color = "#00f";

var bodyTag = document.getElementsByTagName("body");
console.log(bodyTag);

// #4. querySelector("CSS 상에 선택할 수 있는 선택자의 형태")
var fav01 = document.querySelector(".query_unit .fav_01");
console.log(fav01);
fav01.style.color = "#08f";

// #5. querySelectorAll("CSS 상에 선택할 수 있는 선택자의 형태")
var allItems = document.querySelectorAll(".all_unit p");
console.log(allItems);
allItems[1].style.color = "#f90";

for (v of allItems) {
  v.style.border = "1px solid #f00";
}

// 문서 조작
// 속성(properties) 조작
var kidsId = document.querySelector("#kids");
console.log(kidsId);

// 속성값을 가져오기:
// var 메모리변수명 = 변수명.getAttribute("속성명");
var kidsAttrSrc = kidsId.getAttribute("src");
console.log(kidsAttrSrc); // "./img/boy.png"

// 속성값을 변경하기:
// 변수명.setAttribute("속성명", "해당하는 속성의 변경할 값");
kidsId.setAttribute("src", "./img/girl.png");
kidsId.setAttribute("alt", "여자아이");

// 속성값을 생성하기:
// 변수명.setAttribute("새로운 속성명", "해당하는 속성의 생성할 값");
kidsId.setAttribute("author", "방성훈");
kidsId.setAttribute("class", "kidsImg");

// 속성값을 제거하기:
// 변수명.setAttribute("속성값을 제거할 속성명", "");
kidsId.setAttribute("alt", "");


// 문서 객체 조작과 이벤트
var targetImgId = document.querySelector("#targetImg");
console.log(targetImgId);

// function moveRight(){
//   targetImgId.setAttribute("class", "tImg active")
// };
// function moveLeft(){
//   targetImgId.setAttribute("class", "tImg")
// };

/*
// 지정한 클래스명만 조작을 해야한다면:
  변수명.classList.add("추가해야 할 클래스명")   <<<>>>   변수명.classList.remove("삭제해야 할 클래스명")
  변수명.classList.contain("존재 유무의 클래스명")   >>>   true(현재 존재)/false(현재 없음)
*/

function moveRight(){
  targetImgId.classList.add("active");
};
function moveLeft(){
  targetImgId.classList.remove("active");
};


// 클래스명 조작
var bgcolorClass = document.querySelector(".bgcolor");
function changeBg(){
  bgcolorClass.classList.add("red");
}


// 엘리베이터 버튼에서 선택과 취소
var elevatorBtn = document.querySelector(".elevatorButton .number button");
function onOffBtn(){
  var isActive = elevatorBtn.classList.contains("active");
  console.log(isActive);
  if (isActive == false){
    //아직 active라는 클래스명이 존재하지 않은 상태
    elevatorBtn.classList.add("active");
  } else {
    //현재 active라는 클래스명이 존재하는 상태
    elevatorBtn.classList.remove("active");
  }
}


// 로그인 버튼 + 암막(버튼 클릭시 로그인 박스 + 암막)
var darkBg = document.querySelector(".dark_bg");
var popup = document.querySelector(".popup");
function loginOpen(){
  darkBg.classList.add("active");
  popup.classList.add("active");
}
function loginClose(){
  darkBg.classList.remove("active");
  popup.classList.remove("active");
}

// 메뉴: 햄버그 아이콘 클릭에 의한 메뉴 보여주기
var menuIcon = document.querySelector(".menu_icon");