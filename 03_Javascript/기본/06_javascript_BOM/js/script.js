// BOM(Browder Object Model) : 문서공간을 제외한 모든 영역에서 정보를 가져오거나 또는 활용할 수 있는 객체
// window 객체 > BOM, DOM, 내장객체
// console.log() ==> window.console.log()

// setInterval / clearInterval : 반복적으로 무언가를 수행해야할 경우(예시, 이미지 자동 슬라이드)
// setTimeout / cleatTimeout : 단 한번만 실행을 해야할 경우(앱에서는 토스트 메시지를 전달 해야할 경우, 이벤트에 이어서 순차적으로 무언가를 진행해야할 경우)

// location 객체 : URL 정보를 가져올 수 있고 수정도 가능함
////////////////////////////////////////////////////////////////////////////////////////////


// window 객체의 활용
// window.open("url 주소","title(""로 작성하여 생략할 수 있음)", "팝업 형태의 환경 설정 값")
// window.open(
//   "http://www.naver.com", 
//   "네이버 팝업", 
//   "width=400, height=300, left=20, top=50"
// );

// 윈도우 팝업창 불러오기
let popOpenBtn = document.querySelector("#window_open");
popOpenBtn.addEventListener("click", function(){
  window.open(
    "./index_popup.html",
    "윈도우 팝업", 
    "width=300", 
    " height=300", 
    "left=20", 
    "top=20"
  );
})


// setInterval 구문 형식
// [방법 1 - 무조건 실행]
// setInterval(function(){
//     실행문
//   }, 대기시간) 

// [방법 2 - 무조건 실행]
// let 참조변수 = setInterval(function(){
//   실행문
// }, 대기시간) 

// 0부터 올라가는 숫자
let interval1Num = document.querySelector(".interval_1 span");
let num1 = 0;
setInterval(function(){
  interval1Num.textContent = num1;
  num1++;
}, 1000);

// 일정 시간마다 숫자 내리기(카운트다운)
// let interval2Num = document.querySelector("interval_2 span");
// let num2 = 0;
// setInterval(function(){
//   interval2Num.textContent = num2;
//   num2--;
// }, 1000);

//음수값이 나오지 않도록 구성해야 한다면
let interval2Num = document.querySelector(".interval_2 span");
let num2 = 10;
let interval_countdow = setInterval(function(){
  interval2Num.textContent = num2;
  num2--;
  if (num2 < -1){
    clearInterval(interval_countdow);
    interval2Num.textContent = "로켓 발사"
  }
}, 1000);

// 이미지 자동 슬라이드
let slide = document.querySelector("#imgSlide");
let no = 1;
setInterval(function(){
no++;
slide.style.backgroundImage = `url(./img/land_0${no}.jpg)`;
if (no == 9){
  no = 0;
}
}, 3000);



/////////////////////////////////////////////////////////////////////
// setTimeout
// 예약 완료 버튼 클릭시, 상단에 "예약이 완료되었습니다" 라는 문구 노출 후 일정 시간이 지나면 사라지도록 구성
let reserveComplete = document.querySelector(".reserveComplete");
let toastMsg = document.querySelector(".toastMsg");

reserveComplete.addEventListener("click", function(){
  toastMsg.classList.add("active");
  setTimeout(function(){
    toastMsg.classList.remove("active");
  },4000);
});

// location 객체
// https://comic.naver.com/webtoon/list?titleId=833620
// https://comic.naver.com/   >>>   메인주소
// webtoon   >>>   대표 카테고리 주소
// lsit   >>>   리스트 항목으로 접근
// ?titleId=833620   >>>   queryString   >>>   title:814543

// index.html   >>호출>>   webtoon 폴더로 접근하여 index.html   >>호출>>   list 폴더로 접근하여 index.html

// location.href 객체
let locationHref = location.href; // [getType] 현재 url창의 내용을 가져온다
console.log(locationHref); // http://127.0.0.1:5501/03_Javascript/%EA%B8%B0%EB%B3%B8/06_javascript_BOM/index.html

// location.href = "http://www.naver.com"; // [setType] 현재 url창의 내용을 변경
let hashData = location.hash;
console.log(hashData);