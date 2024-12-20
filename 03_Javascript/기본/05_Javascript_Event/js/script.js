// 1. 태그 내부에 on이벤트명="함수호출문();"
function evtFunc1() {
  console.log("evtFunc1 실행");
}

// 2. (in Javascript) 선택자.on이벤트명 = 함수호출문
let evtBtn2 = document.querySelector("#evtBtn2");
console.log(evtBtn2);
evtBtn2.onclick = evtFunc2;

function evtFunc2() {
  console.log("evtFunc2 실행");
}

// 3. (in Javascript) 선택자.addEventListener("이벤트명", function(){ 함수 실행문 })
function sample() {
  console.log("sample 함수 실행");
}

let evtBtn3 = document.querySelector("#evtBtn3");
evtBtn3.addEventListener("click", function () {
  console.log("evtFunc3 실행");
  sample();
});

// ///요소 대상 이벤트 : mouseover & mouseout////
// #1. 직접 함수 호출
let chImg1 = document.querySelector("#ch_img1");
function mouseover1() {
  chImg1.setAttribute("src", "./img/tree-2-thumb.jpg");
}
function mouseout1() {
  chImg1.setAttribute("src", "./img/tree-1-thumb.jpg");
}
// #2. 외부 자바스크립트에서 이벤트 실행 (on이벤트명 적용)
let chImg2 = document.querySelector("#ch_img2");
chImg2.onmouseover = mouseover2;
chImg2.onmouseout = mouseout2;

function mouseover2() {
  chImg2.setAttribute("src", "./img/tree-2-thumb.jpg");
}
function mouseout2() {
  chImg2.setAttribute("src", "./img/tree-1-thumb.jpg");
}

// #3. 외부 자바스크립트에서 이벤트 실행 (addEventListener 적용)
let chImg3 = document.querySelector("#ch_img3");

chImg3.addEventListener("mouseover", function () {
  chImg3.setAttribute("src", "./img/tree-2-thumb.jpg");
});

chImg3.addEventListener("mouseout", function () {
  chImg3.setAttribute("src", "./img/tree-1-thumb.jpg");
});

// 요소대상이벤트 : click
let showBtn = document.querySelector(".showBtn");
let showing = document.querySelector(".showing");

showBtn.addEventListener("click", function () {
  showing.innerHTML = `<img src="./img/flower1.jpg" alt="">`;
});



// 게임 캐릭터의 충전
let hero = {
  name: "토마토재배자",
  level: 1,
  hp: 100,
};
let hp_max = hero.hp; // 100

let moveBtn = document.querySelector(".move");
let addHpBtn = document.querySelector(".add_hp");
let curState = document.querySelector(".cur_state");

// 이동이라는 버튼을 클릭시, 생명력을 -5씩 감소
moveBtn.addEventListener("click", function () {
  hero.hp -= 5;
  if (hero.hp < 5) {
    curState.textContent = `${hero.name}님의 생명력이 모두 소진되었습니다.`;
  } else {
    curState.textContent = `${hero.name}님의 생명력이 ${hero.hp}가(이) 되었습니다.`;
    console.log(`${hero.name}님의 생명력이 ${hero.hp}`);
  }
});

// "생명력 추가"라는 버튼을 클릭시, 최초의 값인 100을 초과하면 안된다.
addHpBtn.addEventListener("click", function () {
  
  hero.hp += 10;
  // 95(hero.hp) + 10 = 105
  if (hero.hp >= hp_max){ 
    105 >= 100;
    hero.hp = hp_max // 105로 변경되었을 시 100으로 변경해라
    curState.textContent = `${hero.name}님의 생명력이 ${hero.hp}가(이) 되었습니다.`;
  }
  curState.textContent = `${hero.name}님의 생명력이 ${hero.hp}가(이) 되었습니다.`;
});



////////////////////////////////////////////////////////////////////////////////
// 요소 대상 이벤트: keyboard 이벤트
let inputBox = document.querySelector(".input_box");
let searchWord = document.querySelector(".search_word");
let searchRst = document.querySelector(".serch_rse");
inputBox.addEventListener(
  "keydown",
  function(evt){

// 키보드 중에서 엔터 버튼을 눌렀을때
  if (evt.keyCode == 13){
    searchWord.textContent = inputBox.value;

    console.log(evt);
    console.log(evt.keyCode);
    console.log(inputBox.value);
  
    let input_word = inputBox.value.trim(); // 검색어 전후의 공백을 제거한 값 
    console.log(input_word);

    if (input_word == ""){
      // 검색어에 대한 trim을 적용한 결과값이 존재하지 않다면: spacebar만 누른 상태에서 엔터를 눌렀다면
      searchRst.textContent = "검색어가 존재하지 않습니다";
    } else {
      // 검색어에 대한 trim을 적용한 결과값이 존재한다면: 유효한 검색어가 존재한다면
      searchWord.textContent = inputBox.value;
      inputBox.value = ""; // [option] 기존 입력상자의 값을 제거한다.
      inputBox.focus(); // [option] 해당 입력항자에 커서가 들어간 상태로 만든다.
    }
  }
});

// 마우스 이동을 통한 이미지 교체
let move1 = document.querySelector("#move1"); // 마우스 무브 이벤트가 발생할 장소를 지정
let cover = document.querySelector(".cover");

move1.addEventListener("mousemove", function(e){

  // console.log("마우스 무브 이벤트 발생")
  // console.log(e);
  let current_x = e.pageX;
  console.log(`지정한 공간(#move1)에서 x좌표의 위치 : ${current_x}`);
  cover.style.width = current_x + "px";
})







/////////////////////////////////////////////////////////////////////////////////////
// 전체 대상 이벤트: resize 이벤트
let size = document.querySelector(".resize_space .size");
let diviceName = document.querySelector(".resize_space .diviceName");

function resizeEvt(){
  let window_width = window.innerWidth;
  console.log("현재 브라우저의 가로 사이즈 : ", window_width);

  size.textContent = window_width

  if(window_width >= 1200){
    diviceName.textContent = "PC";
  } else if (window_width >= 992){
    diviceName.textContent = "Tablet 구간 - H";
  } else if (window_width >= 768){
    diviceName.textContent = "Tablet 구간 - V";
  } else if (window_width >= 576){
    diviceName.textContent = "Mobile 구간 - H"
  } else {
    diviceName.textContent = "Moblie 구간 - V"
  }
}

window.addEventListener("resize", function(){
console.log("리사이즈 이벤트 발생");
resizeEvt();
})
resizeEvt() // 최초 함수 실행(리사이즈 이벤트에서는 반드시 최초실행을 해야 현재 디바이스가 어떤 타입인지를 알 수 있음)


// 전체 대상 이벤트: scroll 이벤트
window.addEventListener("scroll", function(e){
  console.log("스크롤 이벤트 발생");
  console.log(e);
  let scrollTop = window.scrollY;
  console.log("브라우저 상단으로부터 스크롤바가 이동된 거리 : ", scrollTop);
})

let leftPart = document.querySelector("#view .left_part");
let rightPart = document.querySelector("#view .right_part");
window.addEventListener("scroll", function(){
  let scrollTop = window.scrollY;
  if (scrollTop > 1500){
    leftPart.classList.add("active");
    rightPart.classList.add("active");
  } else {
    leftPart.classList.remove("active");
    rightPart.classList.remove("active");
  }
})


// change 이벤트
let myEssay = document.querySelector("#myEssay");
let typingNum = document.querySelector(".typing_num");

myEssay.addEventListener("change", function () {
  console.log("체인지 이벤트 발생");
  console.log(myEssay.value);
});
// 입력상자에 작성되고(포커스 상태) 빠져나올 때(블러 상태) 값을 인지

myEssay.addEventListener("keyup", function () {
  console.log("키업 이벤트 발생");
  console.log(myEssay.value);
  console.log(typeof myEssay.value); // string
  console.log(myEssay.value.length);
  if (myEssay.value.length > 100) {
    alert("최대 작성 가능한 글자수는 100자까지 입니다.");
  } else {
    typingNum.textContent = myEssay.value.length;
  }
});


// 당신이 선호하는 뷰티 브랜드
let favCosmetic = document.querySelector("#fav_cosmetic");
let favCosmeticOpt = document.querySelectorAll("#fav_cosmetic option");
console.log("favCosmeticOpt");
let favBrand = document.querySelector(".fav_brand")



favCosmetic.addEventListener("change", function(){
  console.log("체인지 이벤트 발생");
  favCosmeticOpt[0].setAttribute("disabled", "true");
  console.log(favCosmetic.value);
  favBrand.textContent = favCosmetic.value;
})


// 전송 이벤트
let inputForm = document.querySelector("#input_form");
let inputValue = document.querySelector("#input_value");
let inputRst = document.querySelector(".input_rst");

inputForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 태그 내부의 action으로 인한 초기화되는 부분을 막는다.
  console.log("submit 이벤트 발생");
  console.log("전송된 값 : ", inputValue.value);
  inputRst.textContent = inputValue.value;
});