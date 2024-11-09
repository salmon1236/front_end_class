// 근거리 선택자
// parentNode: 나를 기준으로 부모를 선택할 때 사용
var mine = document.querySelector(".mine");
var parentNd = mine.parentNode;
console.log(parentNd);
{
  /* <div class="parent_selector"></div> */
}
var parentEl = mine.parentElement;
console.log(parentEl);
{
  /* <div class="parent_selector"></div> */
}

// childNode:  나를 기준으로 자식을 찾아서 선택
var parent1 = document.querySelector(".childNode_selector");
var childNd = parent1.childNodes;
console.log(childNd); // NodeList(9) [text, li, text, li, text, li, text, li, text]
// childNd[0].style.color = "#f90";
childNd[1].style.color = "red";
childNd[5].style.color = "blue";

// children : 나를 기준으로 자식을 찾아서 선택
var parent2 = document.querySelector(".children_selector");
var children = parent2.children;
console.log(children); // HTMLCollection(4) [li, li, li, li]

children[1].style.fontWeight = "bold";

// closest() : 가장 가까운 조상을 탐색하여 선택하는 메서드
var target = document.querySelector(".target");
var target_ulMenuCl = target.parentNode.parentNode.parentNode;
console.log(target_ulMenuCl);
var target_closest_ulMenuCl = target.closest(".menu");
console.log(target_closest_ulMenuCl);
target_closest_ulMenuCl.style.border = "3px dashed red";

// 첫번째 자식(firstChild) / 마지막 자식(lastChild)
var parent3 = document.querySelector(".childGroup");
var firstChild = parent3.firstChild;
console.log(firstChild); // #text -> 문서상 첫번째 배치된 빈노드를 지목
var firstChildEl = parent3.firstElementChild;
console.log(firstChildEl); // <p class="first">첫째</p>

var lastChild = parent3.lastChild;
console.log(lastChild); // #text -> 문서상 마지막 배치된 빈노드를 지목
var lastChildEl = parent3.lastElementChild;
console.log(lastChildEl); // <p class="last">넷째</p>

// 이전 형제(previousSiblings) / 다음 형제(nextSiblings)
var _last = document.querySelector(".childGroup .last");
var prevChild = _last.previousSibling;
console.log(prevChild); // #text -> 문서상 배치된 이전 형제의 빈노드를 지목
var prevChildEl = _last.previousElementSibling;
console.log(prevChildEl); // <p>셋째</p>

var _first = document.querySelector(".childGroup .first");
var nextChild = _first.nextSibling;
console.log(nextChild); // #text -> 문서상 배치된 이후 형제의 빈노드를 지목
var nextChildEl = _first.nextElementSibling;
console.log(nextChildEl); // <p>둘째</p>

//////////
// DOM에서 요소를 생성하고 지정된 장소의 맨 하위로 위치시키기
// 1) 지정된 장소의 선택자를 구성
var parent4 = document.querySelector(".createEl_appendChild");

// 2) 문서 객체를 생성
var createEl = document.createElement("h3");
console.log(createEl); // <h3></h3>

createEl.textContent = "새롭게 생성한 문장입니다.";
console.log(createEl); // <h3>새롭게 생성한 문장입니다.</h3>

createEl.setAttribute("class", "newText");
console.log(createEl); // <h3 class="newText">새롭게 생성한 문장입니다.</h3>

createEl.style.color = "red";
console.log(createEl); // <h3 class="newText" style="color: red;">새롭게 생성한 문장입니다.</h3>

// 3) 생성된 마크업을 지정한 장소에 던진다.
parent4.appendChild(createEl);

// 배열 데이터 ["red", "orange", "yellow", "green", "blue"]를 활용하여 지정된 하단의 공간에 차례대로 내부 자식으로 넣기
// 1) 지정한 장소 선택자 구성 & 배열 데이터
var colorArr = ["red", "orange", "yellow", "green", "blue"];
var colorBox = document.querySelector(".colorBox");

// 2) 엘리먼트와 속성, 텍스트 생성(반복문을 활용) -> 지정한 장소의 하위 자식으로 넣는다.
for (v of colorArr) {
  var createEl = document.createElement("p");
  console.log(createEl); // <p></p>
  createEl.textContent = v;
  createEl.style.backgroundColor = v;

  colorBox.appendChild(createEl); // 반복 생성할 때마다 지정된 장소의 맨 마지막 자식의 위치에 던진다.
}

// [실습] 001-hamster.png ~ 007-sandbox.png 배열 데이터 구성하고 지정된 공간의 하단에 차려대로 넣기
// 1) 지정한 장소 선택자 구성 & 배열 데이터
var imgArr = [
  "001-hamster.png",
  "002-turtle.png",
  "003-cat.png",
  "004-dog.png",
  "005-bird.png",
  "006-fish.png",
  "007-sandbox.png",
];
var imageBox = document.querySelector(".imageBox");

// 2) 엘리먼트와 속성, 텍스트 생성(반복문을 활용) -> 지정한 장소의 하위 자식으로 넣는다.
for (v of imgArr) {
  var createImg = document.createElement("img");
  createImg.setAttribute("src", `./img/${v}`);
  // alt에 파일명만 넣는 방법#1
  // substr(idx, 개수)
  // console.log(v.substr(4, v.length - 8));

  // alt에 파일명만 넣는 방법#2
  // split("특정문자") ===> ["분리된 문자1", "분리된 문자2"]

  // console.log(v.split("-")[1].split(".")[0]);
  console.log(v.split(".")[0].split("-")[1]);

  createImg.setAttribute("alt", `${v.split(".")[0].split("-")[1]} 이미지`);
  imageBox.appendChild(createImg);
}

// append() VS prepend()
var colorCover1 = document.querySelector(".addChild_first_last");
colorCover1.prepend("<p>레드</p>");
colorCover1.append("<p>블루</p>");
console.log("<p>레드</p>");
console.log(typeof "<p>레드</p>");

var scheduleToday = document.querySelector(".addLastChild");
var lastSchedule = document.querySelector(".myAfterSchedule");
console.log(lastSchedule);
console.log(typeof lastSchedule);

scheduleToday.append(lastSchedule);

// 슬라이드의 기초
// "다음" 이라는 버튼을 클릭했을 때, 맨 처음 이미지를 맨 마지막 위치로 이동
var petBox1 = document.querySelector(".petBox1");
var nextBtn = document.querySelector(".nextBtn button");

nextBtn.addEventListener("click", function () {
  var petFirst = document.querySelector(".petBox1 img:first-child");
  console.log(petFirst);
  petBox1.append(petFirst);
});

// "이전" 이라는 버튼을 클릭했을 때, 맨 마지막 이미지를 맨 처음 위치로 이동
var petBox2 = document.querySelector(".petBox2");
var prevBtn = document.querySelector(".prevBtn button");

prevBtn.addEventListener("click", function () {
  var petLast = document.querySelector(".petBox2 img:last-child");
  console.log(petLast);
  petBox2.prepend(petLast);
});

// setInterval을 활용하여 전체적으로 우측 이미지가 좌측공간으로 하나씩 교체되는 과정 구성 (append()활용 + interval 시간은 2000ms로 구성)
var petBox3 = document.querySelector(".petBox3");

setInterval(function () {
  var petFirst = document.querySelector(".petBox3 img:first-child");
  petBox3.append(petFirst);
}, 2000);

// 예약완료 화면창을 보여주었다가 일정시간 이후 사라지게 만들기(클래스 생성후, setTimeout 활용하여 시간차로 클래스 제거)
var reserveBtn = document.querySelector(".reserveBtn button");
var reserveMsg = document.querySelector(".reserveMsg");
reserveBtn.addEventListener("click", function () {
  reserveMsg.classList.add("show"); // 클래스를 추가한다. top: -60px ---> 0 (보여진다.)
  setTimeout(function () {
    reserveMsg.classList.remove("show"); // 클래스를 제거한다. top: 0 ---> -60px (감춘다.)
  }, 2000);
});

/*
[이미지 슬라이드]
 - 자동 롤링 슬라이드
 - 마우스오버시, 슬라이드 일시정지
 - next, prev 아이콘 클릭시 이미지가 좌우로 넘어가도록 구성
*/
// #1. 선택자 구성
var sliderBox = document.querySelector("#slider_box");
var slider = document.querySelector(".slider");
var slide = document.querySelectorAll(".slide");
console.log(slide);
/*
NodeList(5)
0: div.slide.slide1
1: div.slide.slide2
2: div.slide.slide3
3: div.slide.slide4
4: div.slide.slide5
*/

// #2. 초기 위치 설정(마지막 이미지 슬라이드를 맨 좌측으로 배치 5-1-2-3-4)
slider.prepend(slide[slide.length - 1]);

// #3. 자동 반복 설정
setInterval(function () {
  var isHover = sliderBox.classList.contains("hover"); // true 또는 false
  if (isHover == true) {
    // (슬라이드 영역으로 마우스오버된 상태) 아무것도 하지마~!!
  } else {
    // (최초 로딩 또는 슬라이드 영역에서 마우스아웃된 상태)자동 슬라이드 모드 설정
    var firstSlide = document.querySelector(".slide:first-child");

    slider.classList.add("next"); // margin-left: -100% --> margin-left: -200% (0.5초 동안 진행)
    // slider.style.marginLeft = "-200%";
    // slider.style.transition = "margin-left 0.5s";

    setTimeout(function () {
      // 맨 좌측의 이미지가 맨 우측으로 자리이동을 시킨다.  동시에 맨 좌측 이미지가 빠진자리에는 그 다음 이미지가 들어온다. (margin-left: -200%) 그 때, 그 다음 이미지 자리이동을 못하도록 막는다. (margin-left: -100%)

      slider.append(firstSlide); // 맨 좌측 이미지를 맨 우측으로 배치한다.

      slider.classList.remove("next"); // margin-left: -200% --> margin-left: -100%
      // slider.style.marginLeft = "-100%";
      // slider.style.transition = "margin-left 0s";
    }, 500);
  }
}, 3000);

// #4. 슬라이드 영역(#slider_box)내부로 커서가 진입했을 때, 자동 슬라이드를 일시정지 시킨다. (마우스 오버시, 일시 정지 / 마우스 아웃시, 자동 재생)
sliderBox.addEventListener("mouseover", function () {
  // console.log(this); // <div id="slider_box"></div>
  console.log(sliderBox); // <div id="slider_box"></div>

  // this.classList.add("hover");
  sliderBox.classList.add("hover");

  // console.log(this); // <div id="slider_box" class="hover"></div>
  console.log(sliderBox); // <div id="slider_box" class="hover"></div>
});

sliderBox.addEventListener("mouseout", function () {
  sliderBox.classList.remove("hover");
});
