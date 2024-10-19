/*
#1. css에서 괄호의 용도
  (): nth-child(n)
  {}: 스타일 선언시 --> 선택자{color:red;}
  []: 속성 선택자 --> 선택자[속성명="속성값"]{color:red;}
*/

/*
  #2. javascript에서 괄호의 용도
  (): 메서드(명령) onclick="proceed();"
    : function proceed(){ 함수의 실행문 }
    : for(v of arr1){}
  {}: function proceed(){ 함수의 실행문 } --> 중괄호의 역할은 내용을 담는 역할
    : 객체 {key1: value1, key2: value2, ...} --> 구조체
  []: 배열데이터
*/

/* 함수 */
/* 
  f(x) = x + 1  ==> x 값이 들어오기 전까지는 아무것도 할 수 없음
  x 라는 값에 2가 적용되었다면 결과는 3으로 도출
  [함수의 구성]
  x + 1 이라는 메모리를 갖고 있음
  x에 담기는 변수값
*/

// 함수의 메모리 공간
function start() {
  document.write("함수 호출 결과");
}
// 함수의 호출부
start(); // start라는 함수를 호출한다.

// 배경색 변경
var _body = document.querySelector("body");
var bgColor = ["#faa", "#ffa", "#afa", "#aaf"];
var i = 0;
function change_Bg() {
  console.log(`적용전 i의 값 : ${i}`)
  _body.style.backgroundColor = bgColor[i];
  i++;
  console.log(`적용후 i의 값 : ${i}`)
  if (i ==bgColor.length) {
    i = -i;
  }
}; 
//브라우저 로딩하면서 "#faa"을 배경색으로 적용하시오
// var bgColor = ["#faa", "#ffa", "#afa", "#aaf"];

// _body.style.backgroundColor = bgColor[i]; //0

// function change_Bg() {
//   console.log(`적용전 i의 값: ${i}`); // 0
//   i++; // 1
//   console.log(`적용후 i의 값: ${i}`); // 1
//   _body.style.backgroundColor = bgColor[i]; // #ffa >>> #afa

//   if (i == bgColor.length - 1) {
//     i = -1;
//   }
// }


///////////////////////////////////////////////////////////////////////////////////

// 함수의 적용 방법


// [일반함수 - 직접 호출]
// #1. 함수문을 작성한다. (대기할 메모리)
function call_1() {
  console.log("일반함수(직접 호출) 호출");
}
// #2. 함수 호출문
call_1(); // 첫번째 함수 호출
call_1(); // 두번째 함수 호출




// [익명함수 - 간접 호출]
// #1. 함수문을 작성한다. (대기할 메모리)
var call_2 = function() {
  console.log("익명함수(간접 호출) 호출");
}
// #2. 함수 호출문
call_2();
call_2();

// 객체에서 적용되는 함수문
// 캐릭터 구성

var hero = {
  // 속성파트
  name: "케일",
  level: 60,
  // 메서드파트
  action: function() {
    console.log(`${hero.name}님이 발도 스킬북을 획득했습니다`)
  }
}
console.log(hero.name);
hero.action();

// 함수문과 DOM의 결합

// #1. 선택자
var _funcImg = document.querySelector("#funcImg");
// #2. 함수문
var insertImg = function() {
  _funcImg.setAttribute("src", "./img/pet.png");
  _funcImg.setAttribute("alt", "반려동물");
  _funcImg.setAttribute("title", "반려동물");
  _funcImg.style.width = "80px";
};
// #3. 함수 호출문
insertImg();

// 버튼 클릭했을 때 이미지 변경(pic-1.jpg ~ pic-4.jpg)

// #1. 선택자
var btnImg = document.querySelector("#btn_img");
console.log(btnImg);
var num = 1;
// #2. 함수문
var change_img = function() {
  num++;
  btnImg.setAttribute("src", `./img/pic-${num}.jpg`);
  console.log("이미지 출력 후 num값 : ", num)
  if(num == 4){ // (1)3  /  (2)4  /  (3)5
    num = 1
  }
};


// 이전 버튼과 다음 버튼 클릭 시 해당하는 이미지 순차적으로 보여주기(파일 기준)

// #1. 선택자
var chImg = document.querySelector("#ch_img");
var no  = 1;

// #2. 함수문
// #2-1. 이전버튼 클릭시
var prev = function(){
  no--;
  chImg.setAttribute("src", `./img/pic-${no}.jpg`)
  if(no < 1){
    no = 4;
  }
}
// #2-2. 다음버튼 클릭시
var next = function(){
  no++;
  if(no > 4){
    no = 1;
  }
  chImg.setAttribute("src", `./img/pic-${no}.jpg`)
}


// 이전 버튼과 다음 버튼 클릭 시 해당하는 이미지 순차적으로 보여주기(배열데이터 기준)
// #1. 선택자 & 배열 데이터 및 초기 데이터
var chImgIdx = document.querySelector("#ch_imgIdx");
var chImgArr = [
  "pic-1.jpg", 
  "pic-2.jpg", 
  "pic-3.jpg", 
  "pic-4.jpg"
];
var idx  = 0;

// #2. 함수문
// #2-1. 이전버튼 클릭시
var prevIdx = function() {
  idx--;
  if(idx < 0){
    idx = 3;
  }
  chImgIdx.setAttribute("src", `./img/${chImgArr[idx]}`);
}
// #2-2. 다음버튼 클릭시
var nextIdx = function() {
  idx++;
  if (idx > 3){
    idx = 0;
  }
  chImgIdx.setAttribute("src", `./img/${chImgArr[idx]}`);
}