// 1. 태그 내부에 on이벤트명="함수호출문();"
function evtFunc1() {
  console.log("evtFunc1 실행");
}

// 2. (in Javascript) 선택자.on이벤트명 = 함수호출문
var evtBtn2 = document.querySelector("#evtBtn2");
console.log(evtBtn2);
evtBtn2.onclick = evtFunc2;

function evtFunc2() {
  console.log("evtFunc2 실행");
}

// 3. (in Javascript) 선택자.addEventListener("이벤트명", function(){ 함수 실행문 })
function sample() {
  console.log("sample 함수 실행");
}

var evtBtn3 = document.querySelector("#evtBtn3");
evtBtn3.addEventListener("click", function () {
  console.log("evtFunc3 실행");
  sample();
});

// ///요소 대상 이벤트 : mouseover & mouseout////
// #1. 직접 함수 호출
var chImg1 = document.querySelector("#ch_img1");
function mouseover1() {
  chImg1.setAttribute("src", "./img/tree-2-thumb.jpg");
}
function mouseout1() {
  chImg1.setAttribute("src", "./img/tree-1-thumb.jpg");
}
// #2. 외부 자바스크립트에서 이벤트 실행 (on이벤트명 적용)
var chImg2 = document.querySelector("#ch_img2");
chImg2.onmouseover = mouseover2;
chImg2.onmouseout = mouseout2;

function mouseover2() {
  chImg2.setAttribute("src", "./img/tree-2-thumb.jpg");
}
function mouseout2() {
  chImg2.setAttribute("src", "./img/tree-1-thumb.jpg");
}

// #3. 외부 자바스크립트에서 이벤트 실행 (addEventListener 적용)
var chImg3 = document.querySelector("#ch_img3");

chImg3.addEventListener("mouseover", function () {
  chImg3.setAttribute("src", "./img/tree-2-thumb.jpg");
});

chImg3.addEventListener("mouseout", function () {
  chImg3.setAttribute("src", "./img/tree-1-thumb.jpg");
});

// 요소대상이벤트 : click
var showBtn = document.querySelector(".showBtn");
var showing = document.querySelector(".showing");

showBtn.addEventListener("click", function () {
  showing.innerHTML = `<img src="./img/flower1.jpg" alt="">`;
});
