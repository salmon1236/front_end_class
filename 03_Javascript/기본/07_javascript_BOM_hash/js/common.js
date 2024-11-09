// common.js  

// 선택자 구성(클릭할 메뉴 아이콘, 보여주어야 할 메뉴 리스트)
let body = document.querySelector("body");
let resBtn = document.querySelector(".resBtn");
let nav = document.querySelector("header nav");

// 반응형에서 클릭할 대상
let menuBtn = document.querySelector(".resBtn .menuBtn");
let closeBtn = document.querySelector(".resBtn .closeBtn");

resBtn.addEventListener("click", function(){
  body.classList.add("showMenu");
  resBtn.classList.add("active");
  nav.classList.add("active");
})

closeBtn.addEventListener("click", function(){
  body.classList.remove("showMenu");
  resBtn.classList.remove("active");
  nav.classList.remove("active");
})