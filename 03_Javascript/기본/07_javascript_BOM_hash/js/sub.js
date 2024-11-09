// sub.js
// http://127.0.0.1:5501/03_Javascript/%EA%B8%B0%EB%B3%B8/07_javascript_BOM_hash/sub.html#nike

// 브라우저가 sub.html로 접근했을 때
var _hash = location.hash; // url로 접근하여 #을 포함한 우측 문구를 가져온다
console.log(_hash); // #nike | #adidas | #puma
var _hash_txt = _hash.replace("#", "");
console.log(_hash_txt);

// 선택자 구성하기
var _main = document.querySelector("main"); // 배너이미지 교체
var _title = document.querySelector("#cont .wrap .title h3"); // 페이지 내의 타이틀 교체
var _contCover = document.querySelector("#cont .wrap .cont"); // 페이지 내의 콘텐츠를 담을 공간
var _contGroup = ""; // 페이지 내의 콘텐츠 넣을 가상의 빈 문자열

var hash_apply = function(){
  _main.style.backgroundImage = `url(./img/${_hash_txt}_banner.jpg)`
  _title.textContent = _hash_txt;

  // 해당하는 콘텐츠로만 가져온다. +=라는 복합대입연산자를 이용하여 내부의 구조를 조립한다.
  _contGroup = ""; // 초기화 작업을 진행한다. _contGroup에 대한 내용을 모두 비우고 구조를 조립한다.

  for(i = 0; i < 4; i++) {
    _contGroup += `
    <div style="background-image: url(./img/${_hash_txt}_0${i+1}.jpg)" onclick="location.href='./detail.html#${_hash_txt}_${i}'"></div>
    `
  }
  // 최종적으로 조립완성된 구조를 케이스 내부에 교체하여 담는다.
  _contCover.innerHTML = _contGroup;
}
hash_apply (); // 브라우저가 로딩되자마자 함수를 호출

// sub.html에서 상단의 메뉴 클릭시
var list = document.querySelectorAll("header .wrap nav ul li");
console.log(list); // NodeList(3) [li, li, li]

var _body = document.querySelector("body");
var _resBtn = document.querySelector(".resBtn");
var _nav = document.querySelector("header nav");

for(const v of list){
  // const 예약어를 사용하면 요소의 위치를 확실하게 고정시킬 수 있음 <-> var 예약어를 사용하면 계속 해당영역의 요소를 덮는다.
  console.log(v);
  v.addEventListener("click", function(){
    console.log(v);
    _hash_txt = v.getAttribute("rel"); // 고정된 영역의 rel 속성값을 가져온다.
    console.log(_hash_txt);
    hash_apply();
    // 반응형일 경우, sub.html 페이지에서 각 메뉴 클릭시, 페이지 데이터를 받으면서 메뉴는 사라져야함
    _body.classList.remove("showMenu");
    _resBtn.classList.remove("active");
    _nav.classList.remove("active");
  })


}

