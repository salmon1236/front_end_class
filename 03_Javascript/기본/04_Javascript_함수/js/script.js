/*
 #1. css에서 괄호의 용도
  () : nth-child(n)
  {} : 스타일 선언시 --> 선택자{color:red;}
  [] : 속성 선택자 --> 선택자[속성명="속성값"]{color:red;}
*/

/*
  #2. javascript에서 괄호의 용도
  () : 메서드(명령) onclick="proceed();"
     : function proceed(){ 함수의 실행문 }
     : for(v of arr1){}
  {} : function proceed(){ 함수의 실행문 } --> 중괄호의 역할은 내용을 담는 역할
     : 객체 {key1: value1, key2: value2, ...} --> 구조체
  [] : 배열데이터
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
  // document.write("함수 호출 결과");
}
// 함수 호출부
start(); // start라는 함수를 호출한다.

// 배경색 변경
var _body = document.querySelector("body");
var bgColor = ["#faa", "#ffa", "#afa", "#aaf", "blue", "orange"];
var i = 0;

function change_bg() {
  console.log(`적용전 i의 값 : ${i}`);
  _body.style.backgroundColor = bgColor[i];
  i++;
  console.log(`적용후 i의 값 : ${i}`);

  if (i == bgColor.length) {
    i = 0;
  }
}

// 브라우저 로딩하면서 "#faa"을 배경색으로 적용하시오.
// var bgColor = ["#faa", "#ffa", "#afa", "#aaf"];

// _body.style.backgroundColor = bgColor[i]; // #ffa

// function change_bg() {
//   console.log(`적용전 i의 값 : ${i}`); // 0 -> 1 -> 2 -> -1
//   i++; // 1 -> 2
//   console.log(`적용후 i의 값 : ${i}`); // 1 -> 2 -> 3 -> 1 -> 0

//   _body.style.backgroundColor = bgColor[i]; // #ffa -> #afa -> #aaf -> #faa

//   if (i == bgColor.length - 1) {
//     i = -1;
//   }
// }

// 함수의 적용방법
// [일반함수 - 직접 호출]
// #1. 함수문을 작성한다.(대기할 메모리)
function call_1() {
  console.log("일반함수(직접 호출) 호출");
}
// #2. 함수 호출문
call_1(); // 첫번째 함수 호출
call_1(); // 두번째 함수 호출

// [익명함수 - 간접 호출]
// #1. 함수문을 작성한다.(대기할 메모리)
var call_2 = function () {
  console.log("익명함수(간접 호출) 호출");
};
// #2. 함수 호출문
console.log(call_2); //함수구문만 보여준다.
call_2(); //함수를 실행
call_2();

// 객체에서 적용되는 함수문
// 캐릭터 구성
var hero = {
  // 속성파트
  name: "화염용병",
  level: 10,
  // 메서드 파트
  action: function () {
    console.log(`${hero.name}가 화염불꼿 칼을 휘둘렀습니다.`);
  },
};
console.log(hero.name);
console.log(hero.action); //함수문만 가져온 상태
hero.action();

// 함수문과 DOM의 결합
// #1. 선택자
var _funcImg = document.querySelector("#funcImg");
// #2. 함수문
var insertImg = function () {
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
var num = 1; //(1)0 / (2)1 / (3)2

// #2. 함수문
var change_img = function () {
  num++;
  btnImg.setAttribute("src", `./img/pic-${num}.jpg`);
  console.log("이미지 출력후 num 값 : ", num);
  if (num == 4) {
    // (1)3  / (2)4 / (3)5
    console.log("진입 성공");
    num = 0; // (1)0 / (2)1 / (3)2
  }
};

// 이전 버튼과 다음 버튼 클릭시 해당하는 이미지 순차적으로 보여주기(파일 기준)
// #1. 선택자
var chImg = document.querySelector("#ch_img");
var no = 1; // (1)0 / (2)1 / (3)2

// #2. 함수문
// #2-1. 이전 버튼 클릭시
var prev = function () {
  no--; // 0(X --> 4) -> 3 -> 2 -> 1 -> 0(X --> 4)
  if (no < 1) {
    no = 4;
  }
  chImg.setAttribute("src", `./img/pic-${no}.jpg`);
};
// #2-2. 다음 버튼 클릭시
var next = function () {
  no++; // 2 -> 3 -> 4 -> 5(X --> 1) -> 2
  if (no > 4) {
    no = 1;
  }
  chImg.setAttribute("src", `./img/pic-${no}.jpg`);
};

// 이전 버튼과 다음 버튼 클릭시 해당하는 이미지 순차적으로 보여주기(배열 데이터 기준)
// #1. 선택자 & 배열 데이터 및 초기 데이터
var chImgIdx = document.querySelector("#ch_imgIdx");
var chImgArr = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg"];
var idx = 0;

// #2. 함수문
// #2-1. 이전 버튼 클릭시
var prevIdx = function () {
  idx--; // -1(X --> 3) -> 2 -> 1 -> 0 -> -1(X --> 3)
  if (idx < 0) {
    idx = 3;
  }
  chImgIdx.setAttribute("src", `./img/${chImgArr[idx]}`);
};
// #2-2. 다음 버튼 클릭시
var nextIdx = function () {
  idx++; // 1 --> 2 --> 3 --> 4(X --> 0) -> 1
  if (idx > chImgArr.length - 1) {
    idx = 0;
  }
  chImgIdx.setAttribute("src", `./img/${chImgArr[idx]}`);
};

// 매개변수를 활용한 데이터의 출력
// 매개변수란 함수구문 외부에서 원인되는 값을 전달 받아서 구문 내부에서 그값을 활용하여 결과를 도출하는 변수
// 미국 -> 캘리포니아주, 텍사스주
// 대한민국 -> 서울시, 경기도

var star1_name = "마동석";
var star1_job = "영화배우";
var star2_name = "장도연";
var star2_job = "개그우먼";

function fnc(name, job) {
  console.log(name);
  console.log(job);
  console.log(`저의 이름은 ${name}이고, 직업은 ${job} 입니다.`);
}

// var fnc = function (name, job) {
//   console.log(name);
// };

fnc(star1_name, star1_job);
// 첫번째 인자 star1_name --> fnc 함수의 첫번째 매개변수(name)로 전달
// 두번째 인자 star1_job --> fnc 함수의 두번째 매개변수(job)로 전달
fnc(star2_name, star2_job);

// 매개변수를 통한 회원명단 출력
// #1. 회원명단의 배열 데이터
// 2차 배열 패턴 구성:  [이름, 아이디, 이메일]
var member = [
  ["홍일동", "h1d", "h1d@naver.com"],
  ["홍이동", "h2d", "h2d@naver.com"],
  ["홍삼동", "h3d", "h3d@naver.com"],
  ["홍사동", "h4d", "h4d@naver.com"],
  ["홍오동", "h5d", "h5d@naver.com"],
  ["홍육동", "h6d", "h6d@naver.com"],
];
// #2. 선택자 구성
var memLists = document.querySelector("#mem_rst");

// #3. 회원 리스트를 가져올 빈 케이스를 구성
var mem_case = "";

// #4. 매개변수를 활용하여 테이블 구조를 구성하는 함수 & 함수호출문

var memListsMake = function (name, id, email) {
  mem_case += `
        <tr>
          <td>${name}</td>
          <td>${id}</td>
          <td>${email}</td>
        </tr>
  `;
};
// a += b ==> a = a + b
// memListsMake(member[0][0], member[0][1], member[0][2]);
// memListsMake(member[1][0], member[1][1], member[1][2]);
// memListsMake(member[2][0], member[1][1], member[1][2]);
// memListsMake(member[3][0], member[1][1], member[1][2]);
// memListsMake(member[4][0], member[1][1], member[1][2]);
// memListsMake(member[5][0], member[1][1], member[1][2]);
for (i = 0; i < member.length; i++) {
  memListsMake(member[i][0], member[i][1], member[i][2]);
}

// #5. 지정한 선택자의 내부에 HTML 구문을 넣어준다.
memLists.innerHTML = mem_case;

/////////////////////////////////
// 매개변수 활용한 환경사진 보여주기
// #1. 객체 배열
var en_arr = [
  { img: "environ_news_1.jpg", title: "환경 사진1" },
  { img: "environ_news_2.jpg", title: "환경 사진2" },
  { img: "environ_news_3.jpg", title: "환경 사진3" },
  { img: "environ_news_4.jpg", title: "환경 사진4" },
  { img: "environ_news_5.jpg", title: "환경 사진5" },
  { img: "environ_news_6.jpg", title: "환경 사진6" },
  { img: "environ_news_7.jpg", title: "환경 사진7" },
  { img: "environ_news_8.jpg", title: "환경 사진8" },
  { img: "environ_news_9.jpg", title: "환경 사진9" },
  { img: "environ_news_10.jpg", title: "환경 사진10" },
  { img: "environ_news_11.jpg", title: "환경 사진11" },
  { img: "environ_news_12.jpg", title: "환경 사진12" },
];
// #2. 선택자 구성
var photoCover = document.querySelector(".photoCover");

// #3. 스크립트에서 활용할 빈케이스 구성
var photoGroup = "";

// #4. 함수구문 & 함수호출문
var sendPhoto = function (img, tit) {
  photoGroup += `
    <div class="photo">
      <div class="photoImg" style="background-image:url(./img/${img})"></div>
      <h4>${tit}</h4>
    </div>
  `;
};
for (v of en_arr) {
  console.log(v);
  sendPhoto(v.img, v.title);
}

// #5. HTML 구조 적용(innerHTML)
photoCover.innerHTML = photoGroup;

//[ 과제 ]던전 입장시 멤버들 구성됨 => 메일에 코드와 콘솔창 결과 이미지 캡쳐해서 보내주세요~~!!
//(콘솔창에 출력할 내용)"닉네임(직업 - level)님이 입장하셨습니다."
//2차 배열 패턴["닉네임", "직업", level]
var dungeon1 = [
  ["불타는 용병", "기사", 56],
  ["얼음 마법사", "마법사", 47],
  ["암흑 도적단장", "도적", 51],
  ["블랙 요정", "다크엘프", 49],
];
function enterance1() {
  // console.log(....);
}
//반복하여 호출

//객체배열
var dungeon2 = [
  { nickName: "불타는 용병", job: "기사", level: 56 },
  { nickName: "얼음 마법사", job: "마법사", level: 47 },
  { nickName: "암흑 도적단장", job: "도적", level: 51 },
  { nickName: "블랙 요정", job: "다크엘프", level: 49 },
];
function enterance2() {
  // console.log(....);
}
//반복하여 호출

////////////////////////////////////
// 전역변수 VS 지역변수 : (상대적인 기준)
var globalVar = "전역변수값";
function varFunc() {
  var localVar = "지역변수값";

  console.log(globalVar);
  console.log(localVar);
}
console.log(globalVar);
// console.log(localVar); //localVar is not defined
varFunc();

// 함수구문 내부의 값을 외부로 가져오기 위한 방법 : return 변수명

var global = "전역값";
function vFunc() {
  var local = "지역값";
  return local;
}
var localVal = vFunc();
console.log(localVal);
// #1. vFunc()를 실행
// #2. 함수로부터 local의 "지역값"을 돌려받는다.
// #3. localVal 변수에 담는다.

// [return문 - 1] 함수를 계산기로 활용하는 과정에서 두 값을 매개변수로 전달하고 결과를 함수문 내부에서 합산을 한 상태에서 최종 결과를 돌려 받는 과정
function sum1(num1, num2) {
  console.log("num1 :", num1);
  console.log("num2 :", num2);
  var sumRst = num1 + num2;
  console.log("sumRst :", sumRst);
  return sumRst;
}
// console.log("sumRst :", sumRst);

var final_sum = sum1(200, 300);
// var final_sum = 500;
console.log("final_sum :", final_sum);

// #1. sum1(200, 300)의 함수 호출문에 의해 함수를 작동시킨다.
//#2. function sum1(num1, num2)에 200과 300의 값을 num1과 num2에 전달을 한다. (매개변수)
//#3. var sumRst = 200 + 300 ==> sumRst = 500
//#4. return sumRst;  ==> return 500;
//#5. var final_sum = 500
//#6. console.log("final_sum :", final_sum);  ==> console.log("final_sum :", 500);

// [return문 - 2] 구매 결제
//
// var totalPrice = 0;
var buyList = [{ product: "양말", num: 5, eachPrice: 1000 }];

function totalFnc(product, num, eachPrice) {
  var eachTotalPrice = num * eachPrice;
  return eachTotalPrice;
}
var final = totalFnc(buyList[0].product, buyList[0].num, buyList[0].eachPrice);
console.log(final);

// [return문 - 3] 구매 결제
var finalPrice = 0;
// 2차 배열 패턴 구성[햄버거 개당 구입 단가, 햄버거 수량, 콜라 개당 구입 단가, 콜라 수량]
var priceArr = [
  [2000, 4, 1000, 3], //1일차 구매 ==> 11000
  [2000, 2, 1000, 2], //2일차 구매 ==> 6000
  [2000, 3, 1000, 5], //3일차 구매 ==> 11000
];
function eachDay(hamPrice, hamNum, cokePrice, cokeNum) {
  var eachSum = hamPrice * hamNum + cokePrice * cokeNum;
  console.log(eachSum);
  return eachSum;
}
for (v of priceArr) {
  console.log(v);
  //[2000, 4, 1000, 3] => [2000, 4, 1000, 3] => [2000, 3, 1000, 5]
  var eachPriceByDay = eachDay(v[0], v[1], v[2], v[3]);
  console.log(eachPriceByDay);
  finalPrice += eachPriceByDay;
}
console.log(`${priceArr.length}일간 구매한 금액 : ${finalPrice}`);

// [또 다른 return문] - 함수 진행을 중단해라 return만 작성한다.
function returnFnc(name, job) {
  console.log(name);
  return; // 이하의 문구를 실행하지 않고 함수문 탈출
  console.log(job);
}
returnFnc("이병헌", "배우");

// switch(변수명){
//   case "값1": 실행문1 또는 구문1;
//   break
//   case "값2": 실행문2 또는 구문2;
//   break
// }

// switch(변수명){
//   case "값1": return 실행문1 또는 구문1;
//   case "값2": return 실행문2 또는 구문2;
// }

// 재귀함수 : 최초로 함수문을 실행한 후, 함수구문 내부를 다시 호출하는 함수(이미지 슬라이드의 자동 모드)
var $k = 0; // 최초값
function selfTest() {
  $k++;
  console.log($k);
  if ($k >= 10) {
    return;
  }
  selfTest(); // 내부에서 함수를 반복적으로 실행한다.
}
selfTest(); // 최초실행

// 즉시실행함수 (람다식)
(function nowFnc() {
  // alert("즉시실행함수 (람다식) 실행");
})();
// 즉시실행함수 (람다식) 특징
// - 함수 호출명 없이 실행가능(호출명에 대한 메모리 없음)
// - 강제 실행

// 함수 내부에서 또 다른 함수를 호출

function step2Fnc() {
  console.log("step2 함수 실행");
}

function step1Fnc() {
  console.log("step1 함수 실행");
  setTimeout(function () {
    step2Fnc(); // 함수 내부에서 또다른 함수를 실행한다.
  }, 3000);
}

step1Fnc(); // 최초실행
