// detail.js

// 배열 데이터 구성
// 2차 배열의 패턴 [이미지파일, 타이틀, 내용]
const nike = [
  ["nike_01.jpg", "나이키 타이틀1", "나이키 내용1"],
  ["nike_02.jpg", "나이키 타이틀2", "나이키 내용2"],
  ["nike_03.jpg", "나이키 타이틀3", "나이키 내용3"],
  ["nike_04.jpg", "나이키 타이틀4", "나이키 내용4"],
];
const adidas = [
  ["adidas_01.jpg", "아디다스 타이틀1", "아디다스 내용1"],
  ["adidas_02.jpg", "아디다스 타이틀2", "아디다스 내용2"],
  ["adidas_03.jpg", "아디다스 타이틀3", "아디다스 내용3"],
  ["adidas_04.jpg", "아디다스 타이틀4", "아디다스 내용4"],
];
const puma = [
  ["puma_01.jpg", "퓨마 타이틀1", "퓨마 내용1"],
  ["puma_02.jpg", "퓨마 타이틀2", "퓨마 내용2"],
  ["puma_03.jpg", "퓨마 타이틀3", "퓨마 내용3"],
  ["puma_04.jpg", "퓨마 타이틀4", "퓨마 내용4"],
];

// http://127.0.0.1:5501/03_Javascript/%EA%B8%B0%EB%B3%B8/07_javascript_BOM_hash/detail.html#nike_0
let _hash = location.hash;
console.log(_hash);
let _hash_txt = _hash.replace("#", "");
console.log(_hash_txt);
let divide_arr = _hash_txt.split("_");
console.log(divide_arr);

let brand = divide_arr[0];
let index = divide_arr[1];
console.log(brand);
console.log(index);

// 선택자 구성
let detailBg = document.querySelector("#cont .wrap .add_img");
let detailTitle = document.querySelector("#cont .wrap h3")
let detailText = document.querySelector("#cont .wrap p")

if(brand == "nike"){
  detailBg.style.backgroundImage = `url(./img/${nike[index][0]})`;
  detailTitle.textContent = nike[index][1];
  detailText.textContent = nike[index][2];
}
if(brand == "adidas"){
  detailBg.style.backgroundImage = `url(./img/${adidas[index][0]})`;
  detailTitle.textContent = adidas[index][1];
  detailText.textContent = adidas[index][2];
}
if(brand == "puma"){
  detailBg.style.backgroundImage = `url(./img/${puma[index][0]})`;
  detailTitle.textContent = puma[index][1];
  detailText.textContent = puma[index][2];
}

let backBtn = document.querySelector(".history button");
backBtn.addEventListener("click", function(){
  // history.back(); // 방문기록상 한단계 뒤로가기
  // history.go(-2); // 방문기록상 n단계 뒤로가기
  // history.forward(); // 방문기록상 한단계 앞으로 가기
  
  // 진입 이전 페이지가 어디든간에 목록(sub.html으로 이동시켜야 한다면)
  location.herf=`./sub.html#${brand}`;
});